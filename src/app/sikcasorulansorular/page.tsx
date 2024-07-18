import React from 'react';
import Image from 'next/image';
import Faq from "../../img/sss.jpeg";

const Sikcasorulansorular = () => {
    return (
        <div className="md:py-12 2xl:px-24 md:px-6 py-9 mt-16 mb-12 px-4">
            <h2 className="font-bold lg:text-4xl text-2xl text-gray-800">Sıkça Sorulan Sorular</h2>
            <div className="flex md:flex-row flex-col md:space-x-8 mt-8">
                <div className="md:w-5/12 lg:w-4/12 w-full">
                    <Image src={Faq} alt="SSS" className="w-full md:block hidden rounded-md"/>
                    <Image src={Faq} alt="SSS" className="w-full md:hidden block object-cover h-36 md:h-auto rounded-md"/>
                </div>
                <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    <div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-lg lg:text-xl leading-5 text-gray-800 pt-2">Ödeme işlemleri güvenli mi?</h3>
                            <svg className="rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="block" d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 hidden">
                            İçerik 1
                        </p>
                        <hr className="my-7 bg-gray-200" />
                    </div>
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-lg lg:text-xl leading-5 text-gray-800 pt-2">Araba ilanı nasıl paylaşabilirim?</h3>
                            <svg className="rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="block" d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 hidden">
                            İçerik 2
                        </p>
                        <hr className="my-7 bg-gray-200" />
                        <div className="flex justify-between items-center cursor-pointer">
                            <h3 className="font-semibold text-lg lg:text-xl leading-5 text-gray-800 pt-2"></h3>
                            <svg className="rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="block" d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 hidden">
                            İçerik 2
                        </p>
                        <hr className="my-7 bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

export default Sikcasorulansorular;
