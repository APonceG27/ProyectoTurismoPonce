import Carousel from "@/componentes/Carousel";
import MenuComponent from "@/componentes/MenuComponent";
import TourCard from "@/componentes/TourCard";
import React from "react";


const tours = [
    {
        title: "Tour al Volcán Arenal",
        description: "Disfruta de una caminata por senderos y aguas termales.",
        image: "/arenal.jpg",
    },
    {
        title: "Puerto Viejo",
        description: "Playas paradisíacas y vida silvestre.",
        image: "/puertoviejo.jpg",
    },
    {
        title: "Tour de Café",
        description: "Conoce el proceso del café costarricense.",
        image: "/cafe.jpg",
    },
];

const HomePage = () => {
    return (
        <div>
            <MenuComponent></MenuComponent>
            <Carousel></Carousel>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <section className="mt-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Algunos de nuestros tours</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {tours.map((tour, index) => (
                            <TourCard key={index} {...tour} />
                        ))}
                    </div>
                </section>

                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Explora la belleza escénica de Costa Rica</h2>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <img src="/canopy.jpg" alt="destino" className="w-56 h-56 rounded-full object-cover" />
                        <img src="/lapas.webp" alt="destino" className="w-56 h-56 rounded-full object-cover" />
                        <img src="/rana.jpg" alt="destino" className="w-56 h-56 rounded-full object-cover" />
                        <img src="/rafting2.jpg" alt="destino" className="w-56 h-56 rounded-full object-cover" />
                    </div>
                </section>
            </div>

        </div>
    );
};

export default HomePage;
