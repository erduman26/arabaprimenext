"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from "../img/logo.jpg";
import { CiHome, CiShop, CiUser, CiReceipt, CiShoppingBasket, CiGrid41 } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import AplicationModal from './AplicationModal';

const Navbar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow 2xl:px-20">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            className='w-11 rounded-full'
            src={Logo}
            alt="Arabaprime logo"
            draggable="false"
          />
          <h1 className="text-3xl font-bold text-gray-800">Araba<span className='text-red-600'>prime</span></h1>
        </div>
        <div className="hidden lg:flex items-center space-x-8 font-bold text-lg">
          <Link href="/" className={`text-gray-950 ${pathname === '/' ? 'text-red-600' : ''}`}>Anasayfa</Link>
          <Link href="/urunler" className={`text-gray-950 ${pathname === '/urunler' ? 'text-red-600' : ''}`}>Ürünler</Link>
          <Link href="/hakkimizda" className={`text-gray-950 ${pathname === '/hakkimizda' ? 'text-red-600' : ''}`}>Hakkımızda</Link>
          <Link href="/bizeulasin" className={`text-gray-950 ${pathname === '/bizeulasin' ? 'text-red-600' : ''}`}>Bize Ulaşın</Link>
          <Link href="/sikcasorulansorular" className={`text-gray-950 ${pathname === '/sikcasorulansorular' ? 'text-red-600' : ''}`}>Sss</Link>
          <Link href="/uyegirisi" className="text-red-600 border-2 border-red-600 py-1.5 px-6 rounded-xl">Üye Girişi</Link>
          <Link href="/basket" passHref>
              <CiShoppingBasket className='w-10 h-10'/>
          </Link>
        </div>
        <div className="lg:hidden items-center text-lg">
          <Link href="/basket" passHref>
              <CiShoppingBasket className='w-10 h-10'/>
          </Link>
        </div>
      </div>
      <div className="lg:hidden z-50 fixed bottom-0 left-0 right-0 rounded-t-3xl bg-white shadow-[0_-2px_2px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around py-2">
          <Link href="/" className="flex flex-col items-center justify-center text-gray-600 text-sm font-semibold">
            {pathname === '/' && <span className='flex absolute text-7xl bottom-14 mb-0.5 text-red-500'>.</span>}
            <CiHome className="w-7 h-7" />
            <span>Ana Sayfa</span>
          </Link>
          <Link href="/urunler" className="flex flex-col items-center justify-center text-gray-600 text-sm font-semibold">
            {pathname === '/urunler' && <span className='flex absolute text-7xl bottom-14 mb-0.5 text-red-500'>.</span>}
            <CiShop className="w-7 h-7" />
            <span>Ürünler</span>
          </Link>
          <div className="flex relative flex-col items-center bottom-6 shadow-lg text-white">
            {isModalOpen ? (
              <HiXMark className="w-14 h-14 bg-red-500 rounded-lg" onClick={toggleModal} />
            ) : (
              <CiGrid41 className="w-14 h-14 bg-red-500 rounded-lg" onClick={toggleModal} />
            )}
          </div>
          <Link href="/paketler" className="flex flex-col items-center justify-center text-gray-600 text-sm font-semibold">
            {pathname === '/paketler' && <span className='flex absolute text-7xl bottom-14 mb-0.5 text-red-500'>.</span>}
            <CiReceipt className="w-7 h-7"/>
            <span>Paketler</span>
          </Link>
          <Link href="/uyegirisi" className="flex flex-col items-center justify-center text-gray-600 text-sm font-semibold">
            {pathname === '/uyegirisi' && <span className='flex absolute text-7xl bottom-14 mb-0.5 text-red-500'>.</span>}
            <CiUser className="w-7 h-7"/>
            <span>Üye/Giriş</span>
          </Link>
        </div>
      </div>
      <AplicationModal isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
}

export default Navbar;
