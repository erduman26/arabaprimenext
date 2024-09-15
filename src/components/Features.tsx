"use client";
import React, { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const features = [
  {
    title: "Geniş Kitle Erişimi",
    description: "Aracınızı geniş bir kitleye ulaştırarak etkili bir şekilde tanıtıyoruz. Görsellerinizi büyük bir takipçi kitlesi ile paylaşarak daha fazla dikkat çekmesini sağlıyoruz.",
    icon: "https://www.svgrepo.com/show/499835/data-report.svg",
    color: "text-amber-500 hover:text-amber-600",
  },
  {
    title: "Çeşitli Paket Seçenekleri",
    description: "Farklı bütçelere ve ihtiyaçlara uygun paketler sunuyoruz. Her paket, aracınızı Instagram da en iyi şekilde tanıtmak için özel olarak hazırlanmıştır.",
    icon: "https://www.svgrepo.com/show/530252/bookshelf.svg",
    color: "text-red-500 hover:text-red-600",
  },
  {
    title: "İnstagram Optimizasyonu",
    description: "Aracınızın görünürlüğünü artırmak için optimize edilmiş paylaşımlar yapıyoruz. Görsellerinizi ve bilgilerinizi en iyi şekilde sergiliyoruz.",
    icon: "https://www.svgrepo.com/show/475038/charter.svg",
    color: "text-green-500 hover:text-green-600",
  },
  {
    title: "Alıcı Kitlesi Hedefleme",
    description: "Aracınızı doğru alıcılarla buluşturmak için hedeflenmiş paylaşımlar yapıyoruz. Potansiyel alıcıları analiz ederek, en uygun kitleye ulaşıyoruz.",
    icon: "https://www.svgrepo.com/show/499831/target.svg",
    color: "text-indigo-500 hover:text-indigo-600",
  },
];

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === features.length - 1 ? 0 : prevSlide + 1
      );
    }, 7000);

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? features.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === features.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="wrapper mx-4 2xl:mx-24">
      <div className="pt-12 xl:pt-20 pb-16 xl:pb-20 text-center">
        <div className="md:w-10/12 xl:w-8/12 mx-auto">
          <h2 className="text-base uppercase text-gray-400 mb-3 tracking-wider font-semibold">
            Ne Yapıyoruz?
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-10 lg:tracking-wide">
            Araba Satışında İhtiyaçlarınıza Uygun Yüksek Etkili Stratejik Çözümler Sunuyoruz
          </h3>
        </div>

        {/* Mobil Versiyonu: Sadece mobilde kaydırma */}
        <div className="block sm:hidden relative mx-auto overflow-hidden rounded-lg shadow-lg">
          {/* Sadece mobilde sağ sol yönlendirme */}
        <div className="bg-red-500 w-full text-white font-semibold py-1.5 flex justify-between items-center px-2">
          <button
            className=""
            onClick={handlePrevSlide}
          >
            <FiArrowLeft className="text-white w-6 h-6" />
          </button>
          <span>Prime Hizmet</span>
          <button
            className=","
            onClick={handleNextSlide}
          >
            <FiArrowRight className="text-white w-6 h-6" />
          </button>
        </div>
          <div
            className="relative flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full p-8 flex flex-col items-center rounded-b-lg border bg-white"
              >
                <img
                  src={feature.icon}
                  alt={`Feature ${index}`}
                  className="w-20 h-20 mb-4"
                />
                <h4 className="text-lg font-semibold pb-3">{feature.title}</h4>
                <p className="mb-4 font-medium line-clamp-4">
                  {feature.description}
                </p>
                <div
                  className={`flex items-center ${feature.color} font-semibold`}
                >
                  <a href="#" className="text-[14.5px]">
                    Daha Fazla Bilgi Edin
                  </a>
                  <FiArrowRight
                    className="ml-0.5"
                    style={{ strokeWidth: 3.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masaüstü Versiyonu: Statik grid layout */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border bg-white shadow-lg p-8"
            >
              <img
                src={feature.icon}
                alt={`Feature ${index}`}
                className="w-20 h-20 mb-4"
              />
              <h4 className="text-lg font-semibold pb-3">{feature.title}</h4>
              <p className="mb-4 font-medium line-clamp-4">
                {feature.description}
              </p>
              <div
                className={`flex items-center ${feature.color} font-semibold`}
              >
                <a href="#" className="text-[14.5px]">
                  Daha Fazla Bilgi Edin
                </a>
                <FiArrowRight
                  className="ml-0.5"
                  style={{ strokeWidth: 3.5 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigasyon noktaları mobilde */}
        <div className="sm:hidden relative mx-auto mt-4 flex space-x-2 justify-center">
          {features.map((_, index) => (
            <div
              key={index}
              className={`w-6 h-1.5 rounded transition-all duration-300 ${
                index === currentSlide ? "bg-red-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
