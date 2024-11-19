import React from 'react'
import AddİmageForm from '../../../components/AddİmageForm';

const DestekİlanFormu = () => {
  return (
    <section className="py-16 md:py-20 flex items-center justify-center">
      <div className="w-full 2xl:mx-24 2xl:px-2 mx-4 mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow rounded-lg border-2">
            <AddİmageForm />
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 text-gray-950">
            <form>
                <h6 className="flex justify-center md:justify-normal text-gray-900 text-base mt-3 mb-6 font-bold">
                    KİŞİSEL BİLGİLER
                </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="ad-soyad">
                          AD SOYAD
                        </label>
                        <input required placeholder='Ahmet YILMAZ' id='ad-soyad' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="instagram">
                          İNSTAGRAM ADRESİ
                        </label>
                        <input required placeholder='aahmetyilmazz' id='instagram' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="sehir">
                          ŞEHİR
                        </label>
                        <input required placeholder='Eskişehir' id='sehir' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="telefon">
                          TELEFON
                        </label>
                        <input required placeholder='0555 555 5555' id='telefon' type="number" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-200" />
                  <h6 className="flex justify-center md:justify-normal text-blueGray-400 text-base mt-3 mb-6 font-bold">
                    ARABA BİLGİLERİ
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="marka-model">
                          MARKA/MODEL
                        </label>
                        <input required placeholder='Aracın Markası veya Modeli' id='marka-model' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="paket">
                          PAKET
                        </label>
                        <input required placeholder='Urban Paket - Standart Paket' id='paket' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="yil">
                          YIL
                        </label>
                        <input required placeholder='2012' id='yil' type="number" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="yakit">
                          YAKIT
                        </label>
                        <input required placeholder='Benzin - Dizel - LGP - Hibrit - Elektrikli' id='yakit' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="vites">
                          VİTES
                        </label>
                        <input required placeholder='Manuel - Otomatik - Yarı Otomatik' id='vites' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="km">
                          KİLOMETRE
                        </label>
                        <input required placeholder='200.000 Km' id='km' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="hasarkaydi">
                          HASAR KAYDI
                        </label>
                        <input required placeholder='2.000 TL Hasar Kaydı Mevcut' id='hasarkaydi' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="degisenparca">
                          DEĞİŞEN PARÇALAR
                        </label>
                        <input required placeholder='Sol Ön Çamurluk - Sol Ön Kapı - Yok' id='degisenparca' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="boyaliparca">
                          BOYALI PARÇALAR
                        </label>
                        <input required placeholder='Kabut - Bagaj - Yok' id='boyaliparca' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="kasatipi">
                          KASA TİPİ
                        </label>
                        <input required placeholder='Sedan - Hatchback' id='kasatipi' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="motor">
                          MOTOR GÜCÜ
                        </label>
                        <input required placeholder='200 Beygir - 1.6 - 1.4 - 1.0' id='motor' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="cekistipi">
                          ÇEKİŞ TİPİ
                        </label>
                        <input required placeholder='Önden - Arkadan - 4x4' id='cekistipi' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="garanti">
                          GARANTİ
                        </label>
                        <input required placeholder='Var - Yok' id='garanti' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-0 md:px-4">
                      <div className="relative w-full mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="fiyat">
                          FİYAT
                        </label>
                        <input required placeholder='285.000' id='fiyat' type="text" className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-200" />
                  <div className="flex flex-wrap mt-6">
                    <div className="w-full lg:w-12/12 px-0 md:px-4">
                      <div className="relative w-full mb-0 md:mb-3">
                        <label className="block text-sm font-bold mb-2" htmlFor="aciklama">
                          AÇIKLAMA
                        </label>
                        <textarea required id='aciklama' className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows={4} />
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block mx-4'>
                    <button type='submit' className='flex items-center justify-center w-full py-4 rounded text-base font-semibold text-white transition-all duration-200 bg-red-600'>Ödemeye Geç</button>
                </div>

                {/* Alt kısım (mobil buton) */}
                <div className="md:hidden fixed left-0 right-0 bottom-0 py-4 flex justify-center items-center rounded-t-2xl bg-white shadow-[0_-2px_2px_rgba(0,0,0,0.1)]">
                    <button className='bg-red-600 text-white font-semibold py-2 w-full mx-4 rounded-lg text-center'>
                        Ödemeye Geç
                    </button>
                </div>
                
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestekİlanFormu