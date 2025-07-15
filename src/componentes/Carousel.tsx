'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        image: "/slider1.jpg",
        title: "Descubre Costa Rica",
        subtitle: "Naturaleza, aventura y cultura te esperan",
    },
    {
        image: "/slider2.jpg",
        title: "Explora playas paradisíacas",
        subtitle: "Una experiencia inolvidable",
    },
    {
        image: "/slider3.jpg",
        title: "Tours personalizados",
        subtitle: "Viajes únicos pensados para ti",
    },
    {
        image: "/slider4.jpeg",
        title: "Hermosos paisajes",
        subtitle: "Escenas imperdibles para tus ojos",
    },
];

const Carousel: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_: number, next: number) => {
            setActiveSlide(next);
        },
    };

    return (
        <div className="w-full relative">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div key={i} className="relative">
                        <img
                            src={slide.image}
                            alt={`slide-${i}`}
                            className="w-full h-[500px] md:h-[700px] object-cover"
                        />

                        {/* Solo anima el slide activo */}
                        {i === activeSlide && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={i} // clave única para reiniciar animación en cada cambio
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4"
                                >
                                    <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                                    <p className="text-base md:text-xl mt-2">{slide.subtitle}</p>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
