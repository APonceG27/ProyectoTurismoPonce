import MenuComponent from "@/componentes/MenuComponent";
import TestimonioComponent from "@/componentes/TestimonioComponent";
import React from "react";

const TestimonioPage: React.FC = () => {

    const vectorTestimonios = [
        {
            nombre: "Edgardo",
            comentario: "Muy bueno el servicio",
            imagen: "/Testimonio1.jpg"
        },
        {
            nombre: "Alejandra",
            comentario: "No me lograron contactar",
            imagen: "/Testimonio2.jpg"
        }
    ];

    return (
        <div>
            <MenuComponent></MenuComponent>
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
    )
}

export default TestimonioPage;