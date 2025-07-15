'use client'
import MenuComponent from "@/componentes/MenuComponent";
import { Provincia, RespuestaAtracciones } from "@/models/RespuestaAtracciones";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const ContactoPage: React.FC = () => {
    const [provinciaSeleccionada, setProvinciaSeleccionada] = useState<number>(0);
    const [listaAtraccionesPorProvincia, setListaAtraccionesPorProvincia] = useState<Provincia[]>([]);

    useEffect(() => {
        const obtenerAtracciones = async () => {
            const respuesta = await axios.get<RespuestaAtracciones>("https://ponceturismo-vlaprojectbackend-6616686a9df1.herokuapp.com/api/route/Obtener_Las_Atracciones")

            if (respuesta.data.codigoRespuesta === 0)
                setListaAtraccionesPorProvincia(respuesta.data.detalle);
        }
        obtenerAtracciones();
    }, [])

    const atraccionesDisponibles = useMemo(() => {
        const provinciaActual = listaAtraccionesPorProvincia.find(
            (provincia) => Number(provincia.idProvincia) === provinciaSeleccionada
        );

        return provinciaActual ? provinciaActual.atracciones : [];
    }, [provinciaSeleccionada])


    return (
        <div>
            <MenuComponent></MenuComponent>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-4xl text-gray-900 mb-6">
                    ¡Nos encantaría saber de ti!
                </h1>
                <p className="text-xl text-gray-900 dark:text-white mb-8">
                    Si tienes alguna pregunta, sugerencia o comentario, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte y atender todas tus necesidades de la mejor manera posible.
                </p>
                <form className="w-full mx-auto">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre completo" />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo electrónico" />
                        </div>
                    </div>
                    <p className="mb-4">Seleccione una provincia y una atracción</p>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <select
                                value={provinciaSeleccionada}
                                onChange={(e) => setProvinciaSeleccionada(Number(e.target.value))}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value={0}>Seleccione una provincia</option>
                                {
                                    listaAtraccionesPorProvincia.map((provincia) => (
                                        <option key={provincia.idProvincia} value={provincia.idProvincia}>
                                            {provincia.nombreProvincia}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            {
                                provinciaSeleccionada !== 0 && (
                                    <div>
                                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            {
                                                atraccionesDisponibles.map((atraccion) => (
                                                    <option key={atraccion.id} value={atraccion.nombre}>
                                                        {atraccion.nombre}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <p className="mb-4">Seleccione una modalidad</p>
                    <div className="flex items-center mb-4">
                        <input id="option-1" type="radio" name="options" value="TI" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked/>
                        <label htmlFor="option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            Todo incluido
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input id="option-2" type="radio" name="options" value="TC" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="option-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            Tiempo compartido
                        </label>
                    </div>
                    <div className="mb-8">
                        <p className="mb-4">Consultas para la agencia</p>
                        <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deja tus comentarios"></textarea>
                    </div>
                    <button type="submit" className="btn-skyblue w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar Comentario</button>
                </form>

            </div>



        </div>
    )
}

export default ContactoPage;