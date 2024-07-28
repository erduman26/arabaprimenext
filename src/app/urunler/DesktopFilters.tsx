import React from 'react';
import { HiMiniArrowsPointingOut, HiAdjustmentsHorizontal  } from 'react-icons/hi2';

const DesktopFilters = () => {
  return (
    <div className="flex justify-center items-center bg-yellow-400 shadow-md 2xl:mx-24 px-4 rounded-lg py-4 font-semibold text-base mb-7">
      <button className="flex items-center bg-gray-50 px-4 py-4 border-r-2 border-gray-200 rounded-l-md w-full justify-between">
        <span>Marka</span>
        <HiMiniArrowsPointingOut className='w-6 h-6'/>
      </button>
      <button className="flex items-center bg-gray-50 px-4 py-4 border-r-2 border-gray-200 w-full justify-between">
        <span>İndirimli Ürünler</span>
        <HiMiniArrowsPointingOut className='w-6 h-6'/>
      </button>
      <button className="flex items-center bg-gray-50 px-4 py-4 border-r-2 border-gray-200 w-full justify-between">
        <span>Kategoriler</span>
        <HiMiniArrowsPointingOut className='w-6 h-6'/>
      </button>
      <button className="flex items-center bg-gray-50 px-4 py-4 w-full justify-between">
        <span>Fiyat Aralığı</span>
        <HiMiniArrowsPointingOut className='w-6 h-6'/>
      </button>
      <button className="flex items-center bg-red-600 px-4 py-3 text-white rounded-r-md w-full justify-between">
        <span>Filtrele</span>
        <HiAdjustmentsHorizontal className='w-8 h-8 text-white'/>
      </button>
    </div>
  );
};

export default DesktopFilters;
