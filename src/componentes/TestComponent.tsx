import React, { useEffect, useState } from "react";

type Props = {
    verificado: () => void;
}

const TestComponent: React.FC<Props> = ({ verificado }) => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [respuesta, setRespuesta] = useState<string>("");

    useEffect(() => {
        generarPregunta();
    }, [])

    const generarPregunta = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;

        setNum1(a);
        setNum2(b);
        setRespuesta("");
    }

    const verificarRespuesta = () => {
        const respuestaNumero = parseInt(respuesta, 10);

        if (!isNaN(respuestaNumero) && respuestaNumero === num1 + num2) {
            verificado();
        } else {
            generarPregunta();
        }
    }


    return (
        <div className="ventana-mensajes-bg fixed inset-0 flex flex-col items-center justify-center z-50 px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm dark:bg-gray-800">
                <h1 className="text-2xl font-bold mb-4">Verificación de humanidad</h1>

                <div >
                    <p className="mb-2">
                        ¿Cuánto es <strong>{num1} + {num2}</strong>?
                    </p>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={respuesta}
                        onChange={(e) => setRespuesta(e.target.value)}
                        placeholder="Tu respuesta es:">

                    </input>
                    <button
                        onClick={verificarRespuesta}
                        className="btn-skyblue w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Verificar
                    </button>
                </div>


            </div>
        </div>
    )
}

export default TestComponent;