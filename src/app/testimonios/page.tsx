import TestimonioComponent from "@/componentes/TestimonioComponent";
import React from "react";

const TestimonioPage : React.FC = () => {

    return (
        <div>
            <h1>Esta es mi pagina de testimonios</h1>
            <TestimonioComponent></TestimonioComponent>
            <TestimonioComponent></TestimonioComponent>
            <TestimonioComponent></TestimonioComponent>
        </div>
    )
}

export default TestimonioPage;