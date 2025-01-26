"use client";
import React, { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";

interface BasketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BasketModal: React.FC<BasketModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Modal açıldığında scroll'u devre dışı bırak
      document.body.style.overflow = "hidden";
    } else {
      // Modal kapandığında scroll'u etkinleştir
      document.body.style.overflow = "";
    }

    // Cleanup: component unmount edildiğinde scroll'u geri getir
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`z-50 fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-lg transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center py-5 my-1 lg:py-6 lg:my-0.5 px-4 border-b-2">
          <h2 className="text-lg font-bold">Sepetim</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-scroll md:pr-4 px-4">
          {/* Sepet Öğesi 1 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
          {/* Sepet Öğesi 2 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
          {/* Sepet Öğesi 3 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
          {/* Sepet Öğesi 4 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
          {/* Sepet Öğesi 5 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
          {/* Sepet Öğesi 6 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
          {/* Sepet Öğesi 7 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
          {/* Sepet Öğesi 8 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
          {/* Sepet Öğesi 9 */}
          <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src="/bulbenithree.jpg"
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-3 gap-1.5">
                <span className="text-md font-semibold w-auto">
                  Qr Cam Etiketi
                </span>
                <span className="text-sm font-semibold">₺200.00</span>
                <span className="text-sm font-semibold">Adet: 1</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-red-600 rounded text-white">
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  -
                </button>
                <button className="font-semibold bg-red-500 w-8 h-8 text-sm px-2 text-center">
                  1
                </button>
                <button className="flex items-center justify-center font-semibold w-8 h-8">
                  +
                </button>
              </div>
              <div className="bg-red-200 py-8 rounded">
                <img src="bin.svg" className="w-8 h-8" alt="Sil" />
              </div>
            </div>
          </div>
              
        </div>

        {/* Toplam ve Ödeme */}
        <div className="w-full px-4 pb-4 bg-white border-t-2">
          <div className="flex justify-between items-center pt-4">
            <span className="text-lg font-semibold text-gray-800">
              Toplam
            </span>
            <span className="text-lg font-semibold text-gray-800">₺252.00</span>
          </div>
          <button className="w-full mt-4 bg-red-600 text-white py-2 rounded font-semibold">
            Ödemeye Geç
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketModal;
