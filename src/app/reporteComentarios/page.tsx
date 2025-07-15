'use client'
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { ComentarioOut, ReporteComentariosOut } from "@/models/ReporteComentariosOut";
import MenuComponent from "@/componentes/MenuComponent";
import { useAuth } from '../../context/AuthContext';
import { useRouter } from "next/navigation";
import VentanaMensajesComponent from "@/componentes/VentanaMensajesComponent";


const ReporteComentarios: React.FC = () => {
    const router = useRouter();
    const { estaAutenticado, user } = useAuth();
    const [filtro, setFiltro] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [comentarios, setComentarios] = useState<ComentarioOut[]>([])
    const [mostrarModal, setMostrarModal] = useState<boolean>(false);
    const [mensajeModal, setMensajeModal] = useState<string>("");



    useEffect(() => {
        if (!estaAutenticado) {
            setMensajeModal("Usted no está logueado en la aplicación.")
            setMostrarModal(true);
            return;
        }

        if (user?.rol !== "1" && user?.rol !== "2") {
            setMensajeModal("Usted no tiene los permisos para ver este apartado.")
            setMostrarModal(true);
            return;
        }

    }, [estaAutenticado])


    useEffect(() => {
        const obtenerComentarios = async () => {
            const respuesta = await axios.get<ReporteComentariosOut>("https://ponceturismo-vlaprojectbackend-6616686a9df1.herokuapp.com/api/route/Obtener_Comentarios");

            if (respuesta.data.codigoRespuesta === 0) {
                setComentarios(respuesta.data.detalle)
                setLoading(false);
            }
        }

        if (estaAutenticado)
            obtenerComentarios();

    }, []);

    const comentarioFiltrados = useMemo(() => {
        return comentarios.filter(comentario => comentario.nombre.toUpperCase().includes(filtro.toUpperCase())
            || comentario.provincia.toUpperCase().includes(filtro.toUpperCase())
            || comentario.atraccion.toUpperCase().includes(filtro.toUpperCase())
            || comentario.modalidad.toUpperCase().includes(filtro.toUpperCase())
            || comentario.comentario.toUpperCase().includes(filtro.toUpperCase()))
    }, [filtro, comentarios])

    const cerrarModal = () => {
        setMostrarModal(false);
        router.push("/login");
    }

    return (
        <div>
            <MenuComponent></MenuComponent>
            <VentanaMensajesComponent
                mostrar={mostrarModal}
                mensaje={mensajeModal}
                onClose={cerrarModal}></VentanaMensajesComponent>

            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="reportes-input-container">
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-md p-2.5 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                        placeholder="Digite el filtro"></input>
                </div>
                <div>{
                    loading ? (<p>Cargando usuarios...</p>) : (
                        <div className="overflow-x-auto rounded-lg shadow-md">
                            <table className="min-w-full divide-y divide-gray-200 bg-white">
                                <thead className="table-header text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Provincia</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Atracción</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Modalidad</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold">Comentario</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                    {
                                        comentarioFiltrados.map((usu, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.nombre} {usu.apellido}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.provincia}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.atraccion}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.modalidad}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.comentario}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    )
                }</div>

            </div>

        </div>
    )
}

export default ReporteComentarios;