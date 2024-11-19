import React from 'react'

const AdForm = () => {
  return (
    <section className="py-20 flex items-center justify-center">
      <div className="w-full 2xl:mx-40 mx-4 mt-6 shadow">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow rounded-lg bg-gray-50 border-0">
          <div className="rounded-t bg-white shadow mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-gray-900 text-xl font-bold">
                Araba Görseli Yükle
              </h6>
              <p className="font-bold text-lg text-gray-900"> / 6</p>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-12 py-8 pt-8 grid items-center grid-cols-1 sm:gap-12 gap-6 lg:grid-cols-2">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-950 border-dashed rounded-lg cursor-pointer bg-white "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-12 h-12 mb-2.5"
                  >
                    <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
                    Görseli yüklemek için tıklayın
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-400">
                    En fazla 6 görsel yüklenebilir
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" multiple />
              </label>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 text-gray-950">
          <form>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Kişisel Bilgiler
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="ad-soyad">
                          Ad Soyad
                        </label>
                        <input required placeholder='Ahmet YILMAZ' id='ad-soyad' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="instagram">
                          İnstagram Adresi
                        </label>
                        <input required placeholder='aahmetyilmazz' id='instagram' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="sehir">
                          Şehir
                        </label>
                        <input required placeholder='Eskişehir' id='sehir' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="telefon">
                          Telefon
                        </label>
                        <input required placeholder='0555 555 5555' id='telefon' type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-200" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Araba Bilgileri
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="marka-model">
                          Marka/Model
                        </label>
                        <input required placeholder='Aracın Markası veya Modeli' id='marka-model' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="paket">
                          Paket
                        </label>
                        <input required placeholder='Urban Paket - Standart Paket' id='paket' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="yil">
                          Yıl
                        </label>
                        <input required placeholder='2012' id='yil' type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="yakit">
                          Yakıt
                        </label>
                        <input required placeholder='Benzin - Dizel - LGP - Hibrit - Elektrikli' id='yakit' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="vites">
                          Vites
                        </label>
                        <input required placeholder='Manuel - Otomatik - Yarı Otomatik' id='vites' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="km">
                          Kilometre
                        </label>
                        <input required placeholder='200.000 Km' id='km' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="hasarkaydi">
                          Hasar Kaydı
                        </label>
                        <input required placeholder='2.000 TL Hasar Kaydı Mevcut' id='hasarkaydi' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="degisenparca">
                          Değişen Parçalar
                        </label>
                        <input required placeholder='Sol Ön Çamurluk - Sol Ön Kapı - Yok' id='degisenparca' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="boyaliparca">
                          Boyalı Parçalar
                        </label>
                        <input required placeholder='Kabut - Bagaj - Yok' id='boyaliparca' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="kasatipi">
                          Kasa Tipi
                        </label>
                        <input required placeholder='Sedan - Hatchback' id='kasatipi' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="motor">
                          Motor Gücü
                        </label>
                        <input required placeholder='200 Beygir - 1.6 - 1.4 - 1.0' id='motor' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="cekistipi">
                          Çekiş Tipi
                        </label>
                        <input required placeholder='Önden - Arkadan - 4x4' id='cekistipi' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="garanti">
                          Garanti
                        </label>
                        <input required placeholder='Var - Yok' id='garanti' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="fiyat">
                          Fiyat
                        </label>
                        <input required placeholder='285.000' id='fiyat' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-200" />
                  <div className="flex flex-wrap mt-6">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-xs font-bold mb-2" htmlFor="aciklama">
                          Açıklama
                        </label>
                        <textarea required id='aciklama' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows={4} />
                      </div>
                    </div>
                  </div>
                  <div className='mx-4'>
                    <button type='submit' className='flex items-center justify-center w-full py-4 rounded text-base font-semibold text-white transition-all duration-200 bg-red-600 hover:bg-red-500'>İlan Ver</button>
                </div>
                </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdForm;
