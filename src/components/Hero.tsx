"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BannerOne from "../img/araba.jpg";
import BannerFour from "../img/arababilgi.jpg";
import BannerTwo from "../img/bannerbir.jpg";
import BannerThree from "../img/bannerikinci.jpg";

const Hero = () => {
  // En üstteki slider için state ve görselleri ayarlama
  const [mainCurrentIndex, setMainCurrentIndex] = useState(0);
  const mainImages = [BannerOne, BannerFour];

  useEffect(() => {
    const interval = setInterval(() => {
      setMainCurrentIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 7000); // 7 saniyede bir geçiş
    return () => clearInterval(interval);
  }, [mainImages.length]);

  // Alttaki slider için state ve görselleri ayarlama
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [BannerTwo, BannerThree];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7 saniyede bir geçiş
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-3 lg:gap-4 mx-auto 2xl:mx-24 lg:mb-5 rounded-lg">
      {/* En üstte tam genişlikte görsel slider */}
      <div className="w-full">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
          <Image
            src={mainImages[mainCurrentIndex]}
            alt={`Main Slide ${mainCurrentIndex + 1}`}
            className="w-full h-full object-cover object-center"
          />
          {/* Slider indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {mainImages.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-1.5 rounded ${index === mainCurrentIndex ? 'bg-red-600' : 'bg-gray-100'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Altında iki görsel yan yana - Masaüstü için Carousel */}
      <div className="flex flex-row lg:w-1/2 w-full gap-3 lg:gap-4">
        <div className="w-full lg:hidden flex gap-3">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
            <Image
              src={BannerTwo}
              alt="Small 1"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
            <Image
              src={BannerThree}
              alt="Small 2"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Carousel for desktop */}
        <div className="hidden lg:block w-full relative">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Slider indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-1.5 rounded ${index === currentIndex ? 'bg-red-600' : 'bg-gray-100'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
