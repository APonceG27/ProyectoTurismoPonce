'use client'
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MenuComponent: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
    const { logout } = useAuth();
    const router = useRouter();

    const manejarLogout = () => {
        logout();
        router.push("/login");
    }

    return (
        <div>
            <nav className="menu-component bg-white">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <Link
                        href="/home"
                        className="text-2xl font-bold text-blue-600">
                        <img className="menu-logo" src="/CRTurismoLogo.jpeg" alt="logo" />
                    </Link>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {
                                    isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12">

                                        </path>
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16">
                                        </path>
                                    )
                                }
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        <li><Link href="/home">Inicio</Link></li>
                        <li><Link href="/testimonios">Testimonios</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                        <li className="relative group">
                            <button>Reportes</button>
                            <ul className="absolute hidden group-hover:block bg-white border shadow-md py-2 rounded z-10">
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/reporteUsuarios'>Usuarios</Link></li>
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/reporteComentarios'>Comentarios</Link></li>
                            </ul>
                        </li>
                        <li>
                            <button onClick={manejarLogout}>Salir</button>
                        </li>
                    </ul>
                </div>
                {
                    isOpen && (
                        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
                            <li><Link href="/home">Inicio</Link></li>
                            <li><Link href="/testimonios">Testimonios</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                            <li>
                                <button
                                    className="w-full text-left"
                                    onClick={() => setIsReportOpen(!isReportOpen)}>
                                    Reportes {
                                        isReportOpen ? '▲' : '▼'
                                    }
                                </button>
                                {
                                    isReportOpen && (
                                        <ul className="pl-4 mt-1 space-y-1">
                                            <li><Link href='/reporteUsuarios'>Usuarios</Link></li>
                                            <li><Link href='/reporteComentarios'>Comentarios</Link></li>
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={manejarLogout}>Salir</button>
                            </li>
                        </ul>
                    )
                }
            </nav>
        </div>
    )
}

export default MenuComponent;