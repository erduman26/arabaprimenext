import React from 'react'
import Image from 'next/image';
import Logo from "../../img/logo.jpg";

const Bizeulasin = () => {
  return (
    <div>
      <div className="flex justify-center pt-24 lg:pt-32 pb-6 lg:pb-20">
        <div className="w-full mx-4 lg:mx-0 lg:mt-2">
          <div className="flex bg-white rounded-lg shadow mx-auto 2xl:mx-24 lg:mx-4">
            <div className="block lg:w-10/12 md:w-full">
              <div className="relative flex items-center justify-center h-full rounded-l-lg shadow-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
                <div className="hidden lg:block relative z-10 w-full max-w-lg bg-white opacity-90 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-200">
                  <div className=" space-y-3">
                    <h3 className="text-gray-950 text-3xl font-bold">
                      Bize Ulaşın!
                    </h3>
                    <p className="text-gray-950">
                      Her türlü bilgi talebi, öneri ve yorumlarınız için aşağıdaki formu kullanarak bizimle iletişime geçebilirsiniz. Ekibimiz en kısa sürede size geri dönüş sağlayacaktır.
                    </p>
                    <div className="flex items-center -space-x-2 overflow-hidden">
                      <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                      <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                      <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                      <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                      <p className="text-sm text-gray-950 font-medium translate-x-4">
                        Arabaprime Ekibi ile, çözüm hep yanınızda!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-8 lg:w-8/12 md:w-full border border-gray-200 rounded-r-lg shadow-lg">
              <div className="w-20 ml-auto mr-auto mb-2">
                <Image className="rounded-full" src={Logo} alt="arabaprime" />
              </div>
              <div className="flex items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800">Araba<span className="text-red-600">prime</span></h1>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4" />
                <a href="#" className="text-sm font-bold text-center text-gray-500 hidden lg:inline">HOŞ GELDİNİZ!</a>
                <a href="#" className="text-sm font-bold text-center text-gray-500 lg:hidden">BİZE ULAŞIN!</a>
                <span className="border-b w-1/5 lg:w-1/4" />
              </div>
              <div className="mt-4 lg:flex lg:space-x-4">
                <div className="lg:w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Ad Soyad</label>
                  <input className="bg-gray-100 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" placeholder='Erdem Ceviz' />
                </div>
                <div className="mt-4 lg:mt-0 lg:w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">E-Mail</label>
                  <input className="bg-gray-100 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" placeholder='prime@gmail.com' />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Açıklama</label>
                <textarea required id='aciklama' className="bg-gray-100 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full" placeholder='Mesajınız' rows={3} />
              </div>
              <div className="mt-5">
                <button className="bg-red-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-500">GÖNDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-80 mb-0.5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d766.7184807962035!2d30.501628769595698!3d39.764939029096006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc166afea5ef1d%3A0xd21fcc4948c18e7d!2zVmnFn25lbGlrLCBBdGF0w7xyayBCbHYuLCAyNjAyMCBPZHVucGF6YXLEsS9Fc2tpxZ9laGly!5e0!3m2!1str!2str!4v1718811971576!5m2!1str!2str"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Bizeulasin