import React from 'react';
import { CiFilter, CiSearch } from "react-icons/ci";

const MobileFilters = () => {
  return (
    <div className="pt-6 pb-4 flex items-center justify-center rounded-lg space-x-2">
      <div className="relative w-full">
        <input 
          type="text" 
          placeholder="Ara..." 
          className="p-2 border rounded-lg w-full shadow-md bg-gray-100 pl-10"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" style={{ strokeWidth: 1 }}/>
      </div>
      <div className="w-12 h-10 bg-gray-100 border text-gray-500 flex items-center justify-center rounded-lg px-1.5 shadow-md">
        <CiFilter className="w-full h-full" style={{ strokeWidth: 0.7 }} />
      </div>
    </div>
  );
};

export default MobileFilters;
