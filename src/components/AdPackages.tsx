import React from 'react'
import Image from 'next/image';
import Ücretsiz from '../img/ücretsizpaket.png';
import Destek from '../img/destekpaket.png';
import Uzman from '../img/uzmanpaket.png';
import Nitelikli from '../img/niteliklipaket.png'

const AdPackages = () => {
  return (
    <div className="mt-8 md:mx-2 2xl:mx-2">
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
          <div className="absolute bottom-2 right-2 bg-white text-red-600 font-bold px-2 py-1 rounded-full shadow-lg text-sm md:text-base">
            0 TL
          </div>
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
        <div className="relative">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={Destek}
            alt="Ürün Adı"
          />
          <div className="absolute bottom-2 right-2 bg-white text-red-600 font-bold px-2 py-1 rounded-full shadow-lg text-sm md:text-base">
            100 TL
          </div>
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
          <div className="absolute bottom-2 right-2 bg-white text-red-600 font-bold px-2 py-1 rounded-full shadow-lg text-sm md:text-base">
            200 TL
          </div>
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
        <div className="relative ">
          <Image
            className="w-full rounded-lg shadow-lg"
            src={Nitelikli}
            alt="Ürün Adı"
          />
          <div className="absolute bottom-2 right-2 bg-white text-red-600 font-bold px-2 py-1 rounded-full shadow-lg text-sm md:text-base">
            Pasif
          </div>
        </div>
        <div className="mt-2 md:mt-3">
          <div className="flex items-center mt-2 space-x-1 text-white">
            <span className="shadow-lg text-base font-semibold lg:font-bold bg-red-600 px-3 py-1 lg:py-2 rounded-md w-full flex items-center justify-center">
              Pasif Paket
            </span>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default AdPackages