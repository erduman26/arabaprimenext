"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Faq from "../../img/sss.jpeg";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";

const Sikcasorulansorular = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
          question: 'Ödeme işlemleri güvenli mi?',
          answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          question: 'Araba ilanı nasıl paylaşabilirim?',
          answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          question: 'QR kod beni bul sticker yönetimini nasıl yapabirim?',
          answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          question: 'Kargoya Ne Kadar Ödeyeceğim?',
          answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          question: 'Siparişim Ne Kadar Sürede Gelir?',
          answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    ];

    return (
        <div className="md:py-12 2xl:px-24 md:px-6 py-9 mt-16 mb-12 px-4">
            <h2 className="font-bold lg:text-4xl text-2xl text-gray-800">Sıkça Sorulan Sorular</h2>
            <div className="flex md:flex-row flex-col md:space-x-8 mt-8">
                <div className="md:w-5/12 lg:w-4/12 w-full">
                    <Image src={Faq} alt="SSS" className="w-full md:block hidden rounded-md"/>
                    <Image src={Faq} alt="SSS" className="w-full md:hidden block object-cover h-36 md:h-auto rounded-md"/>
                </div>
                <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                    {faqData.map((faq, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                                <h3 className="font-semibold text-lg lg:text-xl leading-5 text-gray-800 pt-2">{faq.question}</h3>
                                {activeIndex === index ? <HiMiniChevronUp className='w-8 h-8' /> : <HiMiniChevronDown className='w-8 h-8' />}
                            </div>
                            {activeIndex === index && (
                                <p className="font-normal text-base leading-6 text-gray-600 mt-4 w-11/12">
                                    {faq.answer}
                                </p>
                            )}
                            <hr className="my-6 bg-gray-200" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sikcasorulansorular;
