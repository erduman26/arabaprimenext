"use client";
import React, { useEffect, useState } from 'react';

const images = [
  '//otoaksesuar.com/Data/EditorFiles/Ana%20banner/Anabanner/Web-Banner.png',
  '//www.otoaksesuar.com/Data/EditorFiles/BulbeniQR-Banner (1).png',
  '//otoaksesuar.com/Data/EditorFiles/Ana banner/Anabanner/1.%20Pick-Up-masa%C3%BCst%C3%BC1200x389.png',
  '//otoaksesuar.com/Data/EditorFiles/Ana banner/Anabanner/5. Krom-Aksesuar-masaüstü1200x389.png',
];

const Carausel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 7000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative mx-auto 2xl:mx-24  overflow-hidden lg:mb-8 rounded-lg">
      <div
        className="relative flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-1 md:w-6 md:h-1.5 rounded ${index === currentSlide ? 'bg-red-600' : 'bg-gray-100'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carausel;
