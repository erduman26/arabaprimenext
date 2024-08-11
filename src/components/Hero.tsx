"use client";
import React from 'react';
import Image from 'next/image';
import BannerOne from "../img/araba.jpg";
import BannerTwo from "../img/bannerbir.jpg";
import BannerThree from "../img/bannerikinci.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-4 mx-auto 2xl:mx-24 lg:mb-5 rounded-lg">
      {/* En üstte tam genişlikte görsel */}
      <div className="w-full">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={BannerOne}
            alt="Large"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Altında iki görsel yan yana */}
      <div className="flex flex-row lg:flex-col w-full lg:w-1/2 gap-2 lg:gap-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 lg:w-full">
          <Image
            src={BannerTwo}
            alt="Small 1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 lg:hidden">
          <Image
            src={BannerThree}
            alt="Small 2"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
