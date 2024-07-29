import { HiOutlineShoppingBag } from "react-icons/hi2";
import MobileFilters from "./MobileFilters";
import DesktopFilters from "./DesktopFilters";
import Carausel from './Carausel';

const Urunler = () => {
  return (
    <div className="my-16 md:my-24">
      <div className="mx-2 mb-4">
        <div className="lg:hidden">
      <MobileFilters />
      </div>
      <Carausel />
      <div className="hidden lg:block">
      <DesktopFilters />
      </div>
      </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4 lg:px-4 2xl:px-24 px-2">
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Würth Oto Yıkama Süngeri</h3>
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺125.00</span>
            <span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Detay
            </button>
            <button className="flex items-center text-white bg-red-600 px-3 py-1 rounded-md">
              <HiOutlineShoppingBag className="w-6 h-6 ml-auto" style={{ strokeWidth: 1.9 }} />
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Würth Oto Yıkama Süngeri</h3>
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺125.00</span>
            <span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Detay
            </button>
            <button className="flex items-center text-white bg-red-600 px-3 py-1 rounded-md">
              <HiOutlineShoppingBag className="w-6 h-6 ml-auto" style={{ strokeWidth: 1.9 }} />
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Würth Oto Yıkama Süngeri</h3>
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺125.00</span>
            <span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Detay
            </button>
            <button className="flex items-center text-white bg-red-600 px-3 py-1 rounded-md">
              <HiOutlineShoppingBag className="w-6 h-6 ml-auto" style={{ strokeWidth: 1.9 }} />
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Würth Oto Yıkama Süngeri</h3>
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺125.00</span>
            <span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Detay
            </button>
            <button className="flex items-center text-white bg-red-600 px-3 py-1 rounded-md">
              <HiOutlineShoppingBag className="w-6 h-6 ml-auto" style={{ strokeWidth: 1.9 }} />
            </button>
          </div>
        </div>
      </div>
      <div className="relative border rounded-lg p-2 lg:p-3 shadow-lg ">
        <div className="relative">
          <img
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
            alt="Ürün Adı"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900 truncate">Würth Oto Yıkama Süngeri</h3>
          <div className="flex items-center mt-2">
            <span className="text-base lg:text-xl font-bold text-gray-800 mr-2">₺125.00</span>
            <span className="text-sm font-bold text-gray-500 line-through">₺140.00</span>
          </div>
          <div className="flex items-center mt-2 space-x-1 text-white">
            <button className="text-base font-semibold bg-red-600 px-3 py-1 rounded-md w-full flex items-center justify-center">
              Detay
            </button>
            <button className="flex items-center text-white bg-red-600 px-3 py-1 rounded-md">
              <HiOutlineShoppingBag className="w-6 h-6 ml-auto" style={{ strokeWidth: 1.9 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Urunler;
