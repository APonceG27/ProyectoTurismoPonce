import MenuComponent from "@/componentes/MenuComponent";
import TestimonioComponent from "@/componentes/TestimonioComponent";
import React from "react";

const TestimonioPage: React.FC = () => {

    const vectorTestimonios = [
        {
            nombre: "Edgardo Cubillo",
            comentario: "Muy bueno el servicio, no dudaría en volver a contactar sus servicios.",
            imagen: "/Testimonio1.jpg"
        },
        {
            nombre: "Alejandra Ponce",
            comentario: "Muy buenas opciones de vacaciones y destinos a los cuales asistir. Encantada con la atención brindada.",
            imagen: "/Testimonio2.jpg"
        },
        {
            nombre: "María Vargas",
            comentario: "Una experiencia inolvidable. Todo estuvo perfectamente organizado, desde el transporte hasta las actividades. ¡Volveré sin dudarlo!",
            imagen: "/Testimonio3.jpg"
        },
        {
            nombre: "Camilo Rojas",
            comentario: "Lo mejor de nuestras vacaciones fue descubrir lugares que no salen en las guías turísticas. ¡Gracias por mostrarnos lo auténtico!",
            imagen: "/Testimonio4.jpg"
        }

    ];

    return (
        <div>
            <MenuComponent></MenuComponent>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 md:gap-6">
                    {
                        vectorTestimonios.map((persona, index) => (
                            <TestimonioComponent key={index}
                                nombre={persona.nombre}
                                comentario={persona.comentario}
                                imagen={persona.imagen}>
                            </TestimonioComponent>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TestimonioPage;