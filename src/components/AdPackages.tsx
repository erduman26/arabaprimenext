import React from 'react'
import Image from 'next/image';
import { BiShare } from "react-icons/bi";
import Destek from '../img/destekpaket.jpg';
import Nitelikli from '../img/niteliklipaket.jpg';
import Uzman from '../img/uzmanpaket.jpg';
import Ücretsiz from '../img/ücretsizpaket.jpg'

const AdPackages = () => {
  return (
    <div className="mt-8">
        <div className='px-2 lg:px-24 mb-6 lg:mb-10 font-bold text-2xl lg:text-4xl text-center'>İlan Paketi Seçin</div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-3 lg:px-4 2xl:px-24 px-2">
      {/* İlan Paketleri */}
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
          <Image
            className="w-full rounded-lg"
            src={Ücretsiz}
            alt="Ürün Adı"
          />
          <div className='absolute bottom-2 left-2 text-base sm:text-base md:text-lg lg:text-lg font-semibold text-white truncate'>Kalan
            <span className='pl-1'>10</span>
          </div>
          <BiShare className='absolute bottom-2 right-2 w-6 h-6 md:text-lg lg:w-7 lg:h-7 text-gray-950 bg-white rounded-lg px-0.5'/>
        </div>
        <div className="mt-2 md:mt-3">
          
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg">
        <div className="relative">
        <Image
            className="w-full rounded-lg"
            src={Destek}
            alt="Ürün Adı"
          />
          <div className="absolute bottom-2 left-2 text-base sm:text-base md:text-lg lg:text-lg font-semibold text-white truncate">50,00TL</div>
          <BiShare className='absolute bottom-2 right-2 w-6 h-6 md:text-lg lg:w-7 lg:h-7 text-gray-950 bg-white rounded-lg px-0.5'/>
        </div>
        <div className="mt-2 md:mt-3">
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
          <div className="absolute bottom-2 left-2 text-base sm:text-base md:text-lg lg:text-lg font-semibold text-white truncate">100,00TL</div>
          <BiShare className='absolute bottom-2 right-2 w-6 h-6 md:text-lg lg:w-7 lg:h-7 text-gray-950 bg-white rounded-lg px-0.5'/>
        </div>
        <div className="mt-2 md:mt-3">
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
          <div className="absolute bottom-2 left-2 text-base sm:text-base md:text-lg lg:text-lg font-semibold text-white truncate">200,00TL</div>
          <BiShare className='absolute bottom-2 right-2 w-6 h-6 md:text-lg lg:w-7 lg:h-7 text-gray-950 bg-white rounded-lg px-0.5'/>
        </div>
        <div className="mt-2 md:mt-3">
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Paketi İncele
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg hidden xl:block">
        <div className="relative">
        <Image
            className="w-full rounded-lg"
            src={Uzman}
            alt="Ürün Adı"
          />
          <div className="absolute bottom-2 left-2 text-base sm:text-base md:text-lg lg:text-lg font-semibold text-white truncate">200,00TL</div>
          <BiShare className='absolute bottom-2 right-2 w-6 h-6 md:text-lg lg:w-7 lg:h-7 text-gray-950 bg-white rounded-lg px-0.5'/>
        </div>
        <div className="mt-2 md:mt-3">
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