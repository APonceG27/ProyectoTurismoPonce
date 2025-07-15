import React from "react"

interface VentanaMensajesProps {
    mostrar: boolean;
    mensaje: string;
    onClose: () => void;
}

const VentanaMensajesComponent: React.FC<VentanaMensajesProps> = ({ mostrar, mensaje, onClose }) => {
    if (!mostrar) return null;

    return (
        <div className="ventana-mensajes-bg fixed inset-0 flex flex-col items-center justify-center z-50 px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Mensaje informativo</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{mensaje}</p>
                <button
                    onClick={onClose}
                    className="btn-skyblue w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >Cerrar</button>
            </div>
        </div>
    );
}

export default VentanaMensajesComponent;