import React from 'react';
import Banner from '../../components/Banner';

const AliciKitlesiHedefleme = () => {
  return (
    <div className="pt-24 2xl:mx-24 2xl:px-2 mx-4 flex">
      <div className="flex-1 mb-12">
        <img
          src="https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg"
          alt="Organik Takipçi"
          className="rounded-lg shadow-lg w-full md:h-80 lg:h-96 object-cover mb-4"
        />
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Alıcı Kitlesi Hedefleme</h3>
            <p className='font-medium'>
              Aracınızı doğru alıcıyla buluşturmak, satış sürecini hızlandırmanın en etkili yollarından biridir. Biz, paylaşımlarınızı geniş bir kitleye ulaştırmakla kalmaz, aynı zamanda bu kitleyi dikkatle hedefleriz.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Doğru Alıcıya Ulaşım</h3>
            <p className='font-medium'>
              Takipçi kitlemiz, araç alım satımına ilgisi olan kişilerden oluşur. Aracınızı potansiyel alıcılara göstermek, bu sürecin en kritik adımlarından biridir. İlanlarınızı sadece geniş bir kitleye değil, araç almayı düşünen ve ilgilenen kişilere ulaştırarak satış ihtimalini artırıyoruz.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Hedefli Pazarlama Stratejisi</h3>
            <p className='font-medium'>
              Aracınızın en doğru alıcıya ulaşabilmesi için hedefli pazarlama stratejileri kullanıyoruz. Etiketler, konum bazlı hedefleme ve ilgi alanlarına göre filtreleme yaparak, aracınızın sadece ilgilenen kişiler tarafından görülmesini sağlıyoruz. Bu stratejiyle, ilanlarınız daha hızlı sonuç verir.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Potansiyel Alıcılarla Etkileşim</h3>
            <p className='font-medium'>
              Aracınıza ilgi gösteren kullanıcılarla aktif olarak etkileşim kuruyoruz. Yorumlar, beğeniler ve mesajlar yoluyla aracınıza olan ilgiyi canlı tutuyoruz. Potansiyel alıcılarla kurduğumuz bu etkileşim, aracınızın daha hızlı satılmasına yardımcı olur.
            </p>
        </div>
      </div>
      <div className="w-[298px] ml-4 hidden lg:block">
        <Banner />
      </div>
    </div>
  );
};

export default AliciKitlesiHedefleme;
