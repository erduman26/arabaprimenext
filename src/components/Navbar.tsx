"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from "../img/logo.jpg";
import Basket from '../svg/basket.svg';
import { CiHome, CiShop, CiUser, CiGrid41 } from "react-icons/ci";
import { HiXMark, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import AplicationModal from './AplicationModal';

const Navbar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Gizlenmesi gereken yollar
  const hideRoutes = [
    '/ucretsiz-paket',
    '/destek-paket',
    '/uzman-paket',
    '/ucretsiz-paket/ucretsiz-ilan-formu',
    '/destek-paket/destek-ilan-formu',
    '/uzman-paket/uzman-ilan-formu',
    '/urunler/urun-one',
  ];

  // Eğer mevcut rota listede varsa navbar gizlenir
  const hideMobileNavbar = hideRoutes.includes(pathname);

  return (
    <nav className="fixed w-full z-50 bg-white shadow 2xl:px-24">
      <div className="mx-auto px-4 2xl:px-2 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            className="w-11 rounded-xl"
            src={Logo}
            alt="Arabaprime logo"
            draggable="false"
          />
          <h1 className="text-3xl font-bold text-gray-800">
            Araba<span className="text-red-600">prime</span>
          </h1>
        </div>
        <div className="lg:hidden">
          <Link href="/basket" passHref>
            <HiBars3BottomRight className="w-10 h-10" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-8 font-bold text-lg">
          <Link href="/" className={`text-gray-950 ${pathname === '/' ? 'text-red-600' : ''}`}>Anasayfa</Link>
          <Link href="/urunler" className={`text-gray-950 ${pathname === '/urunler' ? 'text-red-600' : ''}`}>Ürünler</Link>
          <Link href="/hakkimizda" className={`text-gray-950 ${pathname === '/hakkimizda' ? 'text-red-600' : ''}`}>Hakkımızda</Link>
          <Link href="/bizeulasin" className={`text-gray-950 ${pathname === '/bizeulasin' ? 'text-red-600' : ''}`}>Bize Ulaşın</Link>
          <Link href="/uyegirisi" className="text-red-600 border-2 border-red-600 py-1.5 px-6 rounded-xl">Üye Girişi</Link>
          <Link href="/sepetim" passHref>
            <Image src={Basket} alt="Report Icon" className="w-[50px] h-[50px]" />
          </Link>
        </div>
      </div>
      <div className={`lg:hidden z-50 fixed bottom-0 left-0 right-0 rounded-t-3xl bg-white shadow-[0_-2px_2px_rgba(0,0,0,0.1)] ${hideMobileNavbar ? 'hidden' : ''}`}>
        <div className="flex justify-around py-1">
          <Link href="/" className="flex flex-col items-center justify-center text-gray-600 text-sm font-semibold">
            {pathname === '/' && <span className="flex absolute text-7xl bottom-12 mb-0.5 text-red-500">.</span>}
            <CiHome className="w-7 h-7" style={{ strokeWidth: 0.5 }} />
            <span>Anasayfa</span>
          </Link>
          <Link href="/urunler" className="flex flex-col items-center justify-center text-gray-600 text-sm font-semibold">
            {pathname === '/urunler' && <span className="flex absolute text-7xl bottom-12 mb-0.5 text-red-500">.</span>}
            <CiShop className="w-7 h-7" style={{ strokeWidth: 0.5 }} />
            <span>Ürünler</span>
          </Link>
          <div className="flex relative flex-col items-center bottom-4 shadow-lg text-white">
            {isModalOpen ? (
              <HiXMark className="w-14 h-14 bg-red-600 rounded-lg" onClick={toggleModal} />
            ) : (
              <CiGrid41 className="w-14 h-14 bg-red-600 rounded-lg" onClick={toggleModal} />
            )}
          </div>
          <Link href="/sepetim" className="flex flex-col items-center justify-center text-gray-600 text-sm font-semibold">
            {pathname === '/sepetim' && <span className="flex absolute text-7xl bottom-12 mb-0.5 text-red-500">.</span>}
            <HiOutlineShoppingBag className="w-7 h-7" style={{ strokeWidth: 1.5 }} />
            <span>Sepetim</span>
          </Link>
          <Link href="/uyegirisi" className="flex flex-col items-center justify-center text-gray-600 text-sm font-semibold">
            {pathname === '/uyegirisi' && <span className="flex absolute text-7xl bottom-12 mb-0.5 text-red-500">.</span>}
            <CiUser className="w-7 h-7" style={{ strokeWidth: 0.5 }} />
            <span>Profilim</span>
          </Link>
        </div>
      </div>
      <AplicationModal isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
};

export default Navbar;
