"use client"
import React, { useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { useRouter } from "next/navigation";
import VentanaMensajesComponent from "@/componentes/VentanaMensajesComponent";
import TestComponent from "@/componentes/TestComponent";
import "../login.css";

const LoginPage: React.FC = () => {

    const [correo, setCorreo] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [mostrarModal, setMostrarModal] = useState<boolean>(false);
    const [mostrarVerificacion, setMostrarVerificacion] = useState<boolean>(false);

    const { login } = useAuth();
    const router = useRouter();

    async function ValidarCredenciales() {
        /*Consumo de api y despliegue de error*/

        try {
            const respuestaLogin = await login(correo, password);

            if (respuestaLogin) {
                setMostrarVerificacion(true);
            }
            else {
                setMostrarModal(true);
            }


        } catch (error) {
            console.log("Hay un error en el consumo del api", error)
        }
    }

    const manejoVerificado = () => {
        router.push("reporteComentarios");
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    }

    {/* Login de la pantalla */ } 
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/loginImg.jpg')", }}>
            <div className="login-opacity absolute inset-0 bg-gray-900 bg-opacity-30"></div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="relative w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <img src="/CRTurismoLogo.jpeg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="logo"></img>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite su correo:</label>
                            <input
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="correo@gmail.com" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Digite su password:</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="********" />
                        </div>
                        <button
                            onClick={ValidarCredenciales}
                            className="btn-skyblue w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirma credenciales</button>
                    </div>
                </div>
            </div>

            {
                mostrarVerificacion && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
                            <TestComponent verificado={manejoVerificado} />
                        </div>
                    </div>
                )
            }

            {
                mostrarModal && (
                    <VentanaMensajesComponent
                        mostrar={mostrarModal}
                        mensaje="Credenciales incorrectas"
                        onClose={cerrarModal}
                    ></VentanaMensajesComponent>
                )
            }
        </div>
    )
}

export default LoginPage;