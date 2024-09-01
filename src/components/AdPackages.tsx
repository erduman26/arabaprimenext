import React from 'react'
import Image from 'next/image';
import Ücretsiz from '../img/ücretsizpaket.jpg';
import Destek from '../img/destekpaket.jpg';
import Nitelikli from '../img/niteliklipaket.jpg';
import Uzman from '../img/uzmanpaket.jpg';

const AdPackages = () => {
  return (
    <div className="mb-20 mt-8">
        <div className='px-2 lg:px-24 mb-6 lg:mb-10 font-bold text-2xl lg:text-4xl text-center'>İlan Paketi Seçin</div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 lg:gap-4 lg:px-4 2xl:px-24 px-2">
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
          <Image
            className="w-full rounded-lg"
            src={Ücretsiz}
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          {/*<h3 className="text-base sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Ücretsiz Paket</h3>*/}
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺0</span>
            {/*<span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>*/}
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
        <Image
            className="w-full rounded-lg"
            src={Destek}
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          {/*<h3 className="text-base sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Destek Paketi</h3>*/}
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺50</span>
            {/*<span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>*/}
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
        <Image
            className="w-full rounded-lg"
            src={Nitelikli}
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          {/*<h3 className="text-base sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Profesyonel Paket</h3>*/}
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺100</span>
            {/*<span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>*/}
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
        <Image
            className="w-full rounded-lg"
            src={Uzman}
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          {/*<h3 className="text-base sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Uzman Paket</h3>*/}
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺200</span>
            {/*<span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>*/}
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </button>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default AdPackages