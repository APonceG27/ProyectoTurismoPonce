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
            <div className="clientContainer">
                <div className="clientMember">
                    <img
                        src={imagen}
                        className="clientPhoto"
                        width={100}
                        height={100}>
                    </img>
                    <h3>Nombre: {nombre}</h3>
                    <p>Comentario: {comentario}</p>
                </div>
            </div>
        </div>
        
    )
}

export default TestimonioComponent;