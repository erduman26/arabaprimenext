import React from 'react';
import { FiArrowRight } from "react-icons/fi";

const Features = () => {
  return (
    <section className="wrapper mx-4 2xl:mx-24">
      <div className="pt-12 xl:pt-20 pb-16 xl:pb-20 text-center">
        <div className="md:w-10/12 xl:w-8/12 mx-auto">
          <h2 className="text-base uppercase text-gray-400 mb-3 tracking-wider font-semibold">Ne Yapıyoruz?</h2>
          <h3 className="text-xl xl:text-4xl font-bold mb-10">
            Sunduğumuz hizmet, sizin ihtiyaçlarınızı karşılamak için özel olarak tasarlanmıştır.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          <div className="card shadow-lg p-8 items-center">
          <img src="https://www.svgrepo.com/show/499835/data-report.svg" className='w-20 h-20 mb-4' alt="" />
            <h4 className="text-lg font-semibold pb-3">Geniş Kitle Erişimi</h4>
            <p className="mb-4">Hiçbir hayat propagandanın titremesinden muaf değildir. O zamana kadar yarın için endişelenmeme gerek yok.</p>
            <div className='flex items-center text-amber-500 hover:text-amber-600 font-semibold'>
              <a href="#" className="text-[14.5px]">
                Daha Fazla Bilgi Edin
              </a>
              <FiArrowRight className='ml-0.5' style={{ strokeWidth: 3.5 }}/>
            </div>
          </div>
          <div className="card shadow-lg p-8 items-center">
          {/*<FcBarChart className='w-10 h-10 mb-4'/>*/}
          <img src="https://www.svgrepo.com/show/530252/bookshelf.svg" className='w-20 h-20 mb-4' alt="" />
            <h4 className="text-lg font-semibold pb-3">Çeşitli Paket Seçenekleri</h4>
            <p className="mb-4">Hiçbir hayat propagandanın titremesinden muaf değildir. O zamana kadar yarın için endişelenmeme gerek yok.</p>
            <div className='flex items-center text-red-500 hover:text-red-600 font-semibold'>
              <a href="#" className="text-[14.5px]">
                Daha Fazla Bilgi Edin
              </a>
              <FiArrowRight className='ml-0.5' style={{ strokeWidth: 3.5 }}/>
            </div>
          </div>
          <div className="card shadow-lg p-8 items-center">
          <img src="https://www.svgrepo.com/show/475038/charter.svg" className='w-20 h-20 mb-4' alt="" />
            <h4 className="text-lg font-semibold pb-3">Instagram Optimizasyonu</h4>
            <p className="mb-4">Hiçbir hayat propagandanın titremesinden muaf değildir. O zamana kadar yarın için endişelenmeme gerek yok.</p>
            <div className='flex items-center text-green-500 hover:text-green-600 font-semibold'>
              <a href="#" className="text-[14.5px]">
                Daha Fazla Bilgi Edin
              </a>
              <FiArrowRight className='ml-0.5' style={{ strokeWidth: 3.5 }}/>
            </div>
          </div>
          <div className="card shadow-lg p-8 items-center">
          <img src="https://www.svgrepo.com/show/499831/target.svg" className='w-20 h-20 mb-4' alt="" />
            <h4 className="text-lg font-semibold pb-3">Alıcı Kitlesi Hedefleme</h4>
            <p className="mb-4">Hiçbir hayat propagandanın titremesinden muaf değildir. O zamana kadar yarın için endişelenmeme gerek yok.</p>
            <div className='flex items-center text-indigo-500 hover:text-indigo-600 font-semibold'>
              <a href="#" className="text-[14.5px]">
                Daha Fazla Bilgi Edin
              </a>
              <FiArrowRight className='ml-0.5' style={{ strokeWidth: 3.5 }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
