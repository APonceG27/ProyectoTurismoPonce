'use client'
import MenuComponent from "@/componentes/MenuComponent"
import { ReporteUsuariosOut, UsuarioOut } from "@/models/ReporteUsuariosOut"
import axios from "axios"
import React, { useEffect, useMemo, useState } from "react"

const ReporteUsuarios: React.FC = () => {

    const [filtro, setFiltro] = useState<string>("");
    const [usuarios, setUsuarios] = useState<UsuarioOut[]>([]);


    useEffect(() => {
        const obtenerUsuarios = async () => {
            const respuesta = await axios.get<ReporteUsuariosOut>("https://ponceturismo-vlaprojectbackend-6616686a9df1.herokuapp.com/api/route/Obtener_Usuarios");

            if (respuesta.data.codigoRespuesta === 0) {
                setUsuarios(respuesta.data.detalle);
            }
        }

        obtenerUsuarios();
    }, [])

    const usuarioFiltrados = useMemo(() => {
        return usuarios.filter(usuario => usuario.nombre.toUpperCase().includes(filtro.toUpperCase())
            || usuario.correo.toUpperCase().includes(filtro.toUpperCase())
            || usuario.telefono.toUpperCase().includes(filtro.toUpperCase())
            || ObtenerNombreRol(usuario.rol).toUpperCase().includes(filtro.toUpperCase()))
    }, [filtro, usuarios])

    function ObtenerNombreRol(rol: number) {

        switch (Number(rol)) {
            case 1:
                return "Administrador";
            case 2:
                return "Digitador";
            case 3:
                return "Usuario";
            default:
                return "Desconocido";
        }
    }

    return (<div>
        <MenuComponent></MenuComponent>
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder="Digite el filtro"></input>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                    <thead className="table-header text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Correo</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Rol</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Teléfono</th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                        {
                            usuarioFiltrados.map((usu, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{usu.nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{usu.correo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{ObtenerNombreRol(usu.rol)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{usu.telefono}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}

export default ReporteUsuarios;