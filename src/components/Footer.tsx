import React from 'react';
import Image from 'next/image';
import Logo from "../img/logo.jpg";

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-[0_-2px_2px_rgba(0,0,0,0.1)]">
        <div className="px-4 sm:px-6 2xl:px-24 pb-10 lg:pb-0">
          {/*Grid*/}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between lg:gap-8 gap-12 pt-14 pb-8 2xl:px-2">
            <div className="block">
              <h4 className="text-base text-gray-800 font-bold mb-6">Arabaprime</h4>
              <ul className="text-sm transition-all duration-500 font-semibold">
                <li className="mb-4"><a href="javascript:;" className="text-gray-600 hover:text-red-600 transition-all duration-500">Anasayfa</a></li>
                <li className="mb-4"><a href="javascript:;" className="text-gray-600 hover:text-red-600 transition-all duration-500">Ürünler</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Hakkımızda</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Sepetim</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Üye Girişi</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Üye Ol</a></li>
              </ul>
            </div>
            <div className="block">
              <h4 className="text-base text-gray-800 font-bold mb-6">İlan Paketleri</h4>
              <ul className="text-sm transition-all duration-500 font-semibold">
                <li className="mb-4"><a href="javascript:;" className="text-gray-600 hover:text-red-600 transition-all duration-500">Ücretsiz İlan Paketi</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Destek İlan Paketi</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Uzman İlan Paketi</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Nitelikli İlan Paketi</a></li>
              </ul>
            </div>
            <div className="block">
              <h4 className="text-base text-gray-800 font-bold mb-6">Kurumsal</h4>
              <ul className="text-sm transition-all duration-500 font-semibold">
                <li className="mb-4"><a href="javascript:;" className="text-gray-600 hover:text-red-600 transition-all duration-500">İade / İptal Koşulları</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Mesafeli Satış Sözleşmesi</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Gizlilik ve Güvenlik</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Kişisel Verilerin Korunması</a></li>
              </ul>
            </div>
            <div className="block">
              <h4 className="text-base text-gray-800 font-bold mb-6">Yardım</h4>
              <ul className="text-sm font-semibold">
                <li className="mb-4"><a href="javascript:;" className="text-gray-600 hover:text-red-600 transition-all duration-500">Üyelik Sözleşmesi</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Bize Ulaşın</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Şifremi Unuttum</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Hesap Silme</a></li>
                <li className="mb-4"><a href="javascript:;" className=" text-gray-600 hover:text-red-600 transition-all duration-500">Çerez Politikası</a></li>
              </ul>
            </div>
            <div className="block">
              <h4 className="text-base text-gray-800 font-bold mb-6">E-Ticaret Bilgi Sistemi</h4>
              <a href="https://arabaprimenext.vercel.app/">
              <img
                    className='w-32 h-40'
                    src="https://www.adenbilisim.com.tr/wp-content/uploads/2021/04/etbis.png"
                    alt="tozlupetlogo"
                    draggable="false"
                />
                </a>
            </div>
          </div>
          {/*Grid*/}
          <div className="pb-6 lg:py-5 border-t border-gray-400 2xl:px-2">
            <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-6 lg:justify-between lg:flex-row">
                <div className='hidden lg:flex'>
                    <a href="https://arabaprimenext.vercel.app/" className="flex justify-center items-center gap-3">
                        <Image
                            className='relative w-12 h-12 rounded-xl'
                            src={Logo}
                            alt="tozlupetlogo"
                            draggable="false"
                        />
                        <h1 className="text-3xl font-bold text-gray-800">
                            Araba<span className="text-red-600">prime</span>
                        </h1>
                    </a>
                </div>
                <a href="https://arabaprimenext.vercel.app/" className='order-last lg:order-none text-sm font-semibold text-gray-600'>© 2024 Arabaprime Tüm Hakları Saklıdır.</a>
              <div className="flex justify-center items-center mt-4 space-x-4 sm:mt-0">
                <img src="linkedin.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
                <img src="youtube.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
                <img src="facebook.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
                <img src="x-twitter.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
                <img src="instagram.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
