"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const Carausel = () => {
  const images = [
    "//otoaksesuar.com/Data/EditorFiles/Ana%20banner/Anabanner/Web-Banner.png",
    "//www.otoaksesuar.com/Data/EditorFiles/BulbeniQR-Banner (1).png",
    "//otoaksesuar.com/Data/EditorFiles/Ana banner/Anabanner/1.%20Pick-Up-masa%C3%BCst%C3%BC1200x389.png",
    "//otoaksesuar.com/Data/EditorFiles/Ana banner/Anabanner/5. Krom-Aksesuar-masaüstü1200x389.png",
    "//otoaksesuar.com/Data/EditorFiles/Ana%20banner/Anabanner/4.%20Tavan-%C3%9Cr%C3%BCnleri-masa%C3%BCst%C3%BC1200x389.png",
    "//otoaksesuar.com/Data/EditorFiles/Ana%20banner/Anabanner/2.%20Yan-Basamak-masa%C3%BCst%C3%BC1200x389.png",
  ];

  return (
    <div className="relative mx-auto 2xl:mx-24 overflow-hidden lg:mb-8 rounded-lg">
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5000, // Slaytın görünme süresi
          disableOnInteraction: false,
        }}
        speed={1000} // Geçiş hızını 1 saniye (1000ms) olarak ayarlar
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carausel;
