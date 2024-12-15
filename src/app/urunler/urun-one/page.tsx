"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";

import { Pagination } from 'swiper/modules';

const UrunOne = () => {
  const [activeTab, setActiveTab] = useState<"aciklama" | "ozellikler">("aciklama");
  const [quantity, setQuantity] = useState(1); // Ürün adedi

  // Ürün adedini artırma ve azaltma fonksiyonları
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="py-8 -mt-1.5 md:mt-0 pt-24 lg:pt-28 xl:pt-32 mb-8">
      <div className="mx-2 px-2 2xl:mx-24">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          {/* Görsel kısmı */}
          <div className="bg-white md:w-2/4 lg:w-[477px] sm:flex sm:items-center sm:justify-center md:flex-none">
            <Swiper
              loop={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><img src="/bulbenithree.jpg" className='rounded-lg shadow-lg' alt="" /></SwiperSlide>
              <SwiperSlide><img src="/bulbenitwo.jpg" className='rounded-lg shadow-lg' alt="" /></SwiperSlide>
              <SwiperSlide><img src="/bulbenione.jpg" className='rounded-lg shadow-lg' alt="" /></SwiperSlide>
              <SwiperSlide><img src="/bulbenifour.jpg" className='rounded-lg shadow-lg' alt="" /></SwiperSlide>
              {/* Pagination için yer tutucu */}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>

          <div className="w-full">
            {/* Metin kısmı */}
            <div className="flex-1 mt-4 md:mt-0 mx-2">
              <h1 className="text-lg font-bold text-red-500">Özel Ürünler</h1> {/* Kategori */}
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-5">
                Bul Beni QR Araç Cam Etiketi
              </h2>
            </div>

            <div className="mx-2 mb-2 flex items-center space-x-4">
              <p className="text-base font-semibold bg-red-600 text-white py-1 px-2 rounded">%20</p>
              <p className="text-xl font-bold text-gray-950">₺200.00</p>
              <span className="text-sm font-bold text-gray-500 line-through">₺160.00</span>
            </div>

            <div className="hidden md:flex items-center py-5 mb-2 mx-2">
              {/* Adet Değiştirme Butonları */}
              <div className="flex items-center space-x-5 mr-10 bg-red-500 rounded-lg">
                <button
                  className="bg-red-600 text-white w-14 py-2 font-bold text-2xl rounded-l-md"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="text-lg font-bold text-white w-3 text-center">{quantity}</span>
                <button
                  className="bg-red-600 text-white w-14 py-2 font-bold text-2xl rounded-r-md"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              {/* Sepete Ekle Butonu */}
              <Link href="/ucretsiz-paket/ucretsiz-ilan-formu" className="bg-red-600 text-white font-semibold py-3 px-12 rounded-md">
                  Sepete Ekle
              </Link>
            </div>

            {/* Tab Menü */}
            <div className="flex space-x-6 text-lg mb-3 font-bold ml-2 text-gray-700 border-b-2 mt-6">
              <button
                className={`pb-2 ${activeTab === "aciklama" ? "border-b-2 border-gray-600" : ""}`}
                onClick={() => setActiveTab("aciklama")}
              >
                Açıklama
              </button>
              <button
                className={`pb-2 ${activeTab === "ozellikler" ? "border-b-2 border-gray-600" : ""}`}
                onClick={() => setActiveTab("ozellikler")}
              >
                Özellikler
              </button>
            </div>

            {/* Sekme İçeriği */}
            <div className="ml-2">
              {activeTab === "aciklama" ? (
                <p className="text-gray-600 font-medium">
                  Arabaprime grubunda yenilikçi bir ürün olan Bul Beni QR Araç Cam Etiketi Karekod Numaratör,
                  yeni nesil teknolojiyi araç sahipleri ile buluşturuyor. Bul Beni QR, araçlarınıza karekod aracılığıyla
                  kimlik kazandıran akıllı bir etikettir. Bu etiketi aracınızın camına yapıştırarak size kolaylıkla
                  ulaşılabilmesini veya istediğiniz bilgilerin paylaşımını sağlayabilirsiniz.
                </p>
              ) : (
                <ul className="text-gray-600 font-medium list-disc ml-4">
                  <li>Telefon numaranızı paylaşmadan gizlilik içerisinde ulaşılabilir olabilirsiniz.</li>
                  <li>İsterseniz isminizi, telefon numaranızı, mail adresinizi ve sosyal medya hesaplarınızı da paylaşarak profilinizi Bul Beni QR etiketinizi okutanlarla paylaşabilirsiniz.</li>
                  <li>Etiketinizi okutanlardan bildirim alabilirsiniz.</li>
                  <li>Etiketinizi okutanlarla mesajlaşabilirsiniz.</li>
                </ul>
              )}
            </div>

            {/* Alt kısım (mobil buton) */}
            <div className="md:hidden fixed left-0 right-0 bottom-0 py-4 flex items-center justify-between rounded-t-2xl bg-white shadow-[0_-2px_2px_rgba(0,0,0,0.1)] px-4">
              {/* Adet Değiştirme Butonları */}
              <div className="flex items-center space-x-2 bg-red-500 rounded-md">
                <button
                  className="bg-red-600 text-white px-4 py-2 font-bold text-xl rounded-l-md"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="text-center text-lg font-bold text-white w-7">{quantity}</span>
                <button
                  className="bg-red-600 text-white px-4 py-2 font-bold text-xl rounded-r-md"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              {/* Sepete Ekle Butonu */}
              <Link
                href="/ucretsiz-paket/ucretsiz-ilan-formu"
                className="bg-red-600 text-white font-semibold py-2.5 px-4 rounded-md text-center flex-1 items-center ml-4"
              >
                Sepete Ekle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrunOne;
