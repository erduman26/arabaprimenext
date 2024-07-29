import React from 'react';
import { HiMiniArrowsPointingOut, HiAdjustmentsHorizontal  } from 'react-icons/hi2';
import { CiSearch } from "react-icons/ci";

const DesktopFilters = () => {
  return (
    <div className="flex justify-center items-center bg-yellow-400 shadow-md 2xl:mx-24 px-4 rounded-lg py-4 font-semibold text-base mb-7">
      <div className="relative w-full">
        <input 
          type="text" 
          placeholder="Ara..." 
          className="py-4 border-r-2 border-gray-200 rounded-l-lg w-full bg-gray-50 pl-10"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" style={{ strokeWidth: 1 }}/>
      </div>
      <button className="flex items-center bg-gray-50 px-4 py-4 border-r-2 border-gray-200 w-full justify-between">
        <span>Marka</span>
        <HiMiniArrowsPointingOut className='w-6 h-6'/>
      </button>
      <button className="flex items-center bg-gray-50 px-4 py-4 border-r-2 border-gray-200 w-full justify-between">
        <span>Kategoriler</span>
        <HiMiniArrowsPointingOut className='w-6 h-6'/>
      </button>
      <button className="flex items-center bg-gray-50 px-4 py-4 border-r-2 border-gray-200 w-full justify-between">
        <span>Fiyat Aralığı</span>
        <HiMiniArrowsPointingOut className='w-6 h-6'/>
      </button>
      <button className="flex items-center bg-gray-50 px-4 py-4 w-full justify-between">
        <span>Diğer</span>
        <HiMiniArrowsPointingOut className='w-6 h-6'/>
      </button>
      <button className="flex items-center bg-red-600 px-4 gap-6 py-3 text-white rounded-r-md justify-between">
        <span>Filtrele</span>
        <HiAdjustmentsHorizontal className='w-8 h-8 text-white'/>
      </button>
    </div>
  );
};

export default DesktopFilters;
