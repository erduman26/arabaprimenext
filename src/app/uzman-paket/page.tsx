"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Ücretsiz from '../../img/uzmanpaket.png';
import Oneİcon from '../../svg/oneicon.svg';
import Twoİcon from '../../svg/twoicon.svg';
import Threeİcon from '../../svg/threeicon.svg';
import Fourİcon from '../../svg/fouricon.svg';
import Price from '../../svg/price.svg';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';

const DestekPaket = () => {
  const [activeSection, setActiveSection] = useState<string | null>('aciklama'); // Default olarak "aciklama" aktif

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="dark:bg-gray-800 py-8 pt-24 lg:pt-28 xl:pt-32 mb-8">
      <div className="mx-2 px-2 2xl:mx-24">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">

          {/* Görsel kısmı */}
          <div className="rounded-lg shadow-lg bg-white md:w-2/4 lg:w-[477px] sm:flex sm:items-center sm:justify-center md:flex-none">
            <Image className="w-full h-full shadow-md rounded" src={Ücretsiz} alt="Product Image" />
          </div>

          <div>
            {/* Başlık */}
            <div className="flex-1 mt-4 md:mt-0 mx-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 md:mb-5">Uzman İlan Paketi</h2>

              {/* Svg */}
              <div className="flex space-x-2.5 lg:space-x-4 mb-4 md:mb-2">
                <div className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-lg bg-red-500 px-0.5">
                  <Image
                    src={Oneİcon}
                    alt="Report Icon"
                  />
                </div>
                <div className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-lg bg-red-500 px-0.5">
                  <Image
                    src={Twoİcon}
                    alt="Report Icon"
                  />
                </div>
                <div className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-lg bg-red-500 px-0.5">
                  <Image
                    src={Threeİcon}
                    alt="Report Icon"
                  />
                </div>
                <div className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-lg bg-red-500 px-0.5">
                  <Image
                    src={Fourİcon}
                    alt="Report Icon"
                  />
                </div>
              </div>
            </div>

          <div className='hidden md:flex py-4 mb-2 items-center'>
            <p className="bg-red-600 text-white font-semibold py-2 px-4 mx-2 rounded-lg shadow flex items-center">
              <Image src={Price} alt="Buy Icon" className="w-6 h-6 mr-2" />
              200TL
            </p>
            <button className="bg-red-600 text-white font-semibold py-2 px-8 mx-2 rounded-lg shadow">Satın Al</button>
          </div>

            {/* Açılır Kapanır İlan Paketi Açıklaması */}
            <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('aciklama')}>
                <span className="font-bold text-gray-700 dark:text-gray-300 text-lg">İlan Paketi Açıklaması</span>
                {activeSection === 'aciklama' ? <HiMiniChevronUp className='w-6 h-6' /> : <HiMiniChevronDown className='w-6 h-6' />}
              </div>
              {activeSection === 'aciklama' && (
                <p className="font-medium text-gray-600 dark:text-gray-300 text-base mt-2">
                  Arabaprime platformunda sunulan Uzman Paketi, araç sahiplerine en etkili satış çözümlerini sunar. Bu paketle aracınız, profesyonel bir şekilde tanıtılır ve potansiyel alıcılara maksimum erişim sağlanır. Ayrıca, ilanınız 3 gün boyunca Arabaprime Instagram hesabında sabitlenir, böylece takipçilerimizin gözünde daha fazla görünürlük kazanır.
                </p>
              )}
            </div>

            {/* Açılır Kapanır İlan Paketi Özellikleri */}
            <div className='bg-gray-100 p-4 rounded-lg shadow-lg'>
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('ozellikler')}>
                <span className="font-bold text-gray-700 dark:text-gray-300 text-lg">İlan Paketi Özellikleri</span>
                {activeSection === 'ozellikler' ? <HiMiniChevronUp className='w-6 h-6' /> : <HiMiniChevronDown className='w-6 h-6' />}
              </div>
              {activeSection === 'ozellikler' && (
                <p className="font-medium text-gray-600 dark:text-gray-300 text-base mt-2">
                  Ücretsiz paket, Arabaprime platformunda aracınızı listeleyebilmeniz için sunulan temel özellikleri içerir. Bu paketle, aracınızı hiçbir ücret ödemeden geniş bir organik kitleye ulaştırabilirsiniz.
                </p>
              )}
            </div>

            {/* Alt kısım (mobil buton) */}
            <div className='md:hidden space-x-4 px-4 fixed left-0 right-0 bottom-0 py-4 flex justify-center items-center rounded-t-2xl bg-white shadow-[0_-2px_2px_rgba(0,0,0,0.1)]'>
              <p className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow flex items-center justify-center flex-1">
                <Image src={Price} alt="Buy Icon" className="w-6 h-6 mr-2" />
                200TL
              </p>
              <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg flex-1">Satın Al</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestekPaket;
