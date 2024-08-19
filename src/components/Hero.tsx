import Banner from '../img/banner.png';
import Image from 'next/image';

const Hero = () => {

  return (
    <div className='mx-auto md:mx-0 2xl:mx-24 -mt-2'>
        <section className="pb-12">
          <div className="px-2 sm:px-2">
            <div className="grid items-center grid-cols-1 sm:gap-12 gap-4 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl font-bold text-black sm:text-4xl md:text-5xl xl:text-6xl">
                  İlan Vermek Artık Çok Kolay!
                </h1>
                <div className="relative inline-flex">
                    <span className="absolute -inset-x-1 rounded-lg bottom-0 border-b-[30px] sm:border-b-[32px] md:border-b-[35px] lg:border-b-[40px] border-yellow-300" />
                    <p className="relative text-xl font-bold text-gray-950 sm:text-2xl lg:text-3xl xl:text-4xl lg:pt-4 pt-3">Sende Prime Aliesine Katıl!</p>
                  </div>
                <p className="mt-4 lg:mt-8 text-base lg:text-lg xl:text-xl text-gray-800 font-semibold">Aracınızı milyonlarca potansiyel alıcıyla buluşturun. İlanınızı oluşturun ve biz paylaşalım! Profesyonel ve etkili bir paylaşım için doğru yerdesiniz.</p>
                <div className="mt-6 lg:mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a href="#" className="inline-flex items-center justify-center px-6 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-200 bg-red-600 hover:bg-red-500" role="button"> İlan Paketlerini İncele! </a>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Image className="w-full rounded-xl sm:w-auto" src={Banner} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Hero;
