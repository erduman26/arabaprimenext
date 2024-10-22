import React from 'react'
import Image from 'next/image';
import Ücretsiz from '../img/ücretsizpaket.png';
import Destek from '../img/destekpaket.png';
import Uzman from '../img/uzmanpaket.png';
import Nitelikli from '../img/niteliklipaket.png'

const AdPackages = () => {
  return (
    <div className="mt-8">
        <div className='px-2 lg:px-24 mb-6 lg:mb-10 font-bold text-2xl lg:text-4xl text-center'>İlan Paketi Seçin</div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8 lg:px-4 2xl:px-24 px-2">
      {/* İlan Paketleri */}
      <div className="relative border px-2 py-2 lg:px-3 lg:py-3 rounded-lg shadow-lg">
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={Ücretsiz}
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-2 md:mt-3">
          <div className="flex items-center mt-2 space-x-1 text-white">
            <a href='/ucretsiz-paket' className="shadow-lg text-base font-semibold lg:font-bold bg-red-600 px-3 py-1 lg:py-2 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </a>
          </div>
        </div>
      </div>
      <div className="relative border px-2 py-2 lg:px-3 lg:py-3 rounded-lg shadow-lg">
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={Destek}
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-2 md:mt-3">
          <div className="flex items-center mt-2 space-x-1 text-white">
            <a href='/destek-paket' className="shadow-lg text-base font-semibold lg:font-bold bg-red-600 px-3 py-1 lg:py-2 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </a>
          </div>
        </div>
      </div>
      <div className="relative border px-2 py-2 lg:px-3 lg:py-3 rounded-lg shadow-lg">
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={Uzman}
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-2 md:mt-3">
          <div className="flex items-center mt-2 space-x-1 text-white">
            <a href='/uzman-paket' className="shadow-lg text-base font-semibold lg:font-bold bg-red-600 px-3 py-1 lg:py-2 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </a>
          </div>
        </div>
      </div>
      <div className="relative border px-2 py-2 lg:px-3 lg:py-3 rounded-lg shadow-lg">
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={Nitelikli}
            alt="Ürün Adı"
          />
          {/* Görselin üstüne gelen overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-85 flex items-center justify-center rounded">
            <span className="text-red-600 font-bold text-lg md:text-xl xl:text-2xl transform rotate-[-45deg] mb-12">
              Henüz Aktif Değil
            </span>
          </div>
        <div className="mt-2 md:mt-3">
          <div className="flex items-center mt-2 space-x-1 text-white">
            <div className="shadow-lg text-base font-semibold lg:font-bold bg-red-600 px-3 py-1 lg:py-2 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default AdPackages