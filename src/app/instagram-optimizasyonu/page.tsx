import React from 'react';
import Banner from '../../components/Banner';

const İnstagramOptimizasyonu = () => {
  return (
    <div className="pt-24 2xl:mx-24 2xl:px-2 mx-4 flex">
      <div className="flex-1 mb-12">
        <img
          src="https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg"
          alt="Organik Takipçi"
          className="rounded-lg shadow-lg w-full md:h-80 lg:h-96 object-cover mb-4"
        />
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">İnstagram Optimizasyonu</h3>
            <p className='font-medium'>
              İnstagram, yalnızca bir görsel platform değil, aynı zamanda algoritmalara dayalı bir ekosistemdir. Aracınızın bu ekosistemde öne çıkabilmesi için paylaşımlarınız profesyonel bir şekilde optimize edilir.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Algoritma Dostu Paylaşımlar</h3>
            <p className='font-medium'>
              İnstagram algoritmalarını yakından takip ediyor ve paylaşımlarınızı bu doğrultuda optimize ediyoruz. Görseller, etiketler, başlıklar ve zamanlama, algoritmanın en iyi şekilde çalışmasını sağlamak üzere planlanır. Bu sayede, paylaşımlarınız hem takipçilerimize hem de potansiyel yeni alıcılara ulaşır.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Hashtag ve Etiket Kullanımı</h3>
            <p className='font-medium'>
              Doğru hashtag ve etiketlerle, aracınızı ilgilenen kişilere ulaştırırız. Yalnızca takipçilerimiz değil, aynı zamanda araç arayan ve ilgili hashtagleri takip eden kullanıcılar da aracınızı görebilir. Bu stratejiyle, paylaşımlarınızın görünürlüğünü artırır ve hedef kitlenizin genişlemesini sağlarız.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Zamanlama Stratejisi</h3>
            <p className='font-medium'>
              İnstagram paylaşımlarınız, yüksek etkileşim alacak şekilde optimize edilir. Beğeniler, yorumlar ve paylaşımlar, aracınızın daha geniş bir kitleye ulaşmasını sağlar. Etkileşim, sosyal medya başarısının en önemli unsurlarından biridir. Aracınızı paylaşırken kullanılan görseller ve açıklamalar, dikkat çekici ve profesyonel bir şekilde hazırlanır, bu da etkileşim oranlarını daha da artırır.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Görsel Optimizasyonu</h3>
            <p className='font-medium'>
              Aracınızın en iyi fotoğraflarını seçer ve profesyonelce düzenleriz. İyi bir fotoğraf, aracınızın ilk izlenimini oluşturur ve potansiyel alıcıların dikkatini çeker. Işık, açı ve detayların ön plana çıkarılmasıyla görselleriniz, Instagram da daha fazla etkileşim alacak şekilde optimize edilir.
            </p>
        </div>
      </div>
      <div className="w-[298px] ml-4 hidden lg:block">
        <Banner />
      </div>
    </div>
  );
};

export default İnstagramOptimizasyonu;
