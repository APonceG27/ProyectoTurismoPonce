import React from "react";
import "../app/testimonio.css"

interface TestimonioProp {
    nombre: string,
    comentario: string,
    imagen: string
}

const TestimonioComponent: React.FC<TestimonioProp> = ({ nombre, comentario, imagen }) => {

    return (

        <div className="clientSection">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center px-8 py-8">
                    <img
                        className="clientPhoto mb-6"
                        src={imagen}
                        width={100}
                        height={100} />
                    <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 italic">"{comentario}"</p>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">-{nombre}</h5>
                </div>
            </div>
        </div>

    )
}

export default TestimonioComponent;

