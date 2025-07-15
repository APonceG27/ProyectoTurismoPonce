import React from "react";

interface TourCardProps {
  title: string;
  description: string;
  image: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full md:w-[300px]">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TourCard;
