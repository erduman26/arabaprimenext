import Banner from '../img/banner.png';
import Image from 'next/image';

const Hero = () => {

  return (
    <div className='bg-yellow-100 md:bg-white rounded-lg -mt-0.5'>
        <section className="pb-12">
          <div className="px-2 2xl:mx-16 sm:px-0 xl:px-8">
            <div className="grid items-center grid-cols-1 sm:gap-12 gap-6 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  İlan Vermek Artık Çok Kolay!
                </h1>
                
                <p className="mt-5 lg:mt-8 text-base text-gray-700 sm:text-xl font-semibold">Aracınızı milyonlarca potansiyel alıcıyla buluşturun. İlanınızı oluşturun ve biz paylaşalım! Profesyonel ve etkili bir paylaşım için doğru yerdesiniz.</p>
                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a href="#" className="inline-flex items-center justify-center px-10 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-200 bg-red-600 hover:bg-red-500" role="button"> İlan Paketlerini İncele! </a>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Image className="w-full rounded-xl" src={Banner} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Hero;
