"use client";
import React from 'react';

const images = {
  large: 'https://www.cdnaws.com/i/aksesuaryeri/ZW3D2Lqi2qQQvGYHnFzROLPsSdwHVUkzYQ1Dr/images/manset/1-8.jpg',
  small1: 'https://www.cdnaws.com/i/aksesuaryeri/ZW3D2Lqi2qQQvGYHnFzROLPsSdwHVUkzYQ1Dr/images/manset/2-9.jpg',
  small2: 'https://www.cdnaws.com/i/aksesuaryeri/ZW3D2Lqi2qQQvGYHnFzROLPsSdwHVUkzYQ1Dr/images/manset/-15.jpg',
};

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-4 mx-auto 2xl:mx-24 lg:mb-8 rounded-lg">
      <div className="w-full lg:w-2/3">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={images.large}
            alt="Large"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-1/3">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 lg:w-full">
          <img
            src={images.small1}
            alt="Small 1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 lg:w-full">
          <img
            src={images.small2}
            alt="Small 2"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
