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
          <h3 className="text-2xl font-semibold mb-4">Çeşitli Paket Seçenekleri</h3>
            <p className='font-medium'>
                Herkesin ihtiyaçları ve bütçeleri farklıdır. Bu yüzden, müşterilerimize farklı paket seçenekleri sunarak onların gereksinimlerine en uygun çözümleri sağlıyoruz. İster hızlı bir satış arıyor olun, ister daha fazla görünürlük, size uygun bir çözüm mutlaka bulunur.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Ücretsiz Paket</h3>
            <p className='font-medium'>
              Takipçi sayımızın tamamı, reklam veya sponsorlu içeriklerle değil, tamamen organik yollarla edinilmiştir. Bu, platformumuzdaki kullanıcıların ilgisini gerçekten çeken içerikleri takip ettiği anlamına gelir. Aracınız, yalnızca sayıların değil, ilgilenen alıcıların önüne çıkmış olur. Organik bir kitle, araç alımına odaklanmış gerçek kullanıcıları içerir, bu da aracınızın görülme olasılığını artırır.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">İlgi Alanına Göre Hedefleme</h3>
            <p className='font-medium'>
              Takipçilerimiz, araç satışına ilgi duyan bir topluluk olduğundan, aracınızın en doğru kişilerle buluşmasını sağlarız. Bu sayede, takipçilerimizle daha etkili bir etkileşim kurar, aracınızın tanıtımını çok daha güçlü bir hale getiririz. Geniş kitle erişimi, doğru kitleye ulaşarak sonuçların daha verimli olmasını sağlar.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Destek Paketi</h3>
            <p className='font-medium'>
              İnstagram paylaşımlarınız, yüksek etkileşim alacak şekilde optimize edilir. Beğeniler, yorumlar ve paylaşımlar, aracınızın daha geniş bir kitleye ulaşmasını sağlar. Etkileşim, sosyal medya başarısının en önemli unsurlarından biridir. Aracınızı paylaşırken kullanılan görseller ve açıklamalar, dikkat çekici ve profesyonel bir şekilde hazırlanır, bu da etkileşim oranlarını daha da artırır.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Nitelikli Paket</h3>
            <p className='font-medium'>
              Organik takipçi kitlesiyle çalıştığımız için paylaşımlarınızın viral olma potansiyeli yüksektir. Kullanıcılarımız, beğendikleri ve ilgi çekici buldukları araç ilanlarını kendi sosyal ağlarında paylaşabilirler. Bu, aracınızın daha geniş bir kitleye ulaşmasını ve satılma olasılığının artmasını sağlar.
            </p>
        </div>
        <div className='mb-6 p-1'>
          <h3 className="text-2xl font-semibold mb-4">Esnek Fiyatlandırma</h3>
            <p className='font-medium'>
              Her bütçeye uygun paket seçeneklerimizle, kullanıcılarımızın finansal durumlarına en uygun çözümü sunuyoruz. Farklı paket seçenekleri, hem ekonomik hem de stratejik olarak en iyi sonucu almanızı sağlar.
            </p>
        </div>
      </div>
      <div className="w-[345px] ml-3 hidden lg:block">
        <Banner />
      </div>
    </div>
  );
};

export default AliciKitlesiHedefleme;
