import React from 'react';
import Image from 'next/image';
import BannerTwo from '../img/phonebanner.png';
import BannerThree from '../img/socialmedia.jpeg';
const Banner = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="relative w-full h-full">
        <Image
          src={BannerTwo}
          alt="Banner 1"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
