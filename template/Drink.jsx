import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import រូបភាព
import hotLatteImg from '/src/assets/drink/hot_latte.png';
import iceImg from '/src/assets/drink/ice.png';
import icedMatchaImg from '/src/assets/drink/iced-matcha-latte.png';
import cocaImg from '/src/assets/drink/coca.webp';
import pepsiImg from '/src/assets/drink/pepsi.png';
import fantaImg from '/src/assets/drink/fanta.webp';

function Drink({ addToCart }) {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // បង្កើត List ទិន្នន័យ Drink ដោយប្រើ translation keys
  const DrinkList = [
    {
      id: 1,
      nameKey: "drink1Name",
      descKey: "drink1Desc",
      price: 2.50,
      image: hotLatteImg
    },
    {
      id: 2,
      nameKey: "drink2Name",
      descKey: "drink2Desc",
      price: 1.50,
      image: iceImg
    },
    {
      id: 3,
      nameKey: "drink3Name",
      descKey: "drink3Desc",
      price: 1.70,
      image: icedMatchaImg
    },
    {
      id: 4,
      nameKey: "drink4Name",
      descKey: "drink4Desc",
      price: 1.00,
      image: cocaImg
    },
    {
      id: 5,
      nameKey: "drink5Name",
      descKey: "drink5Desc",
      price: 1.00,
      image: pepsiImg
    },
    {
      id: 6,
      nameKey: "drink6Name",
      descKey: "drink6Desc",
      price: 1.00,
      image: fantaImg
    }
  ];

  const handleOpenDetail = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        {/* ចំណងជើងទំព័រ */}
        <h1 className="text-3xl font-extrabold text-slate-800 text-center mb-8">
          {t('allDrinkMenu')}
        </h1>

        {/* Grid Layout សម្រាប់ Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DrinkList.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* ផ្នែករូបភាព */}
              <div className="overflow-hidden aspect-video bg-gray-50 flex items-center justify-center p-4">
                <img 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  src={item.image} 
                  alt={t(item.nameKey)} 
                />
              </div>

              {/* ផ្នែកព័ត៌មាន */}
              <div className="p-5 grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {t(item.nameKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {t(item.descKey)}
                  </p>
                </div>

                {/* តម្លៃ និងប៊ូតុង */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-2xl font-bold text-red-500">
                    ${item.price.toFixed(2)}
                  </span>
                  <button 
                    onClick={() => handleOpenDetail(item)} 
                    className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold rounded-lg transition-colors shadow-md active:scale-95"
                  >
                    {t('orderNow')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal ព័ត៌មានលម្អិត */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl animate-fade-in">
            {/* ប៊ូតុង X បិទ Modal */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold"
            >
              ✕
            </button>

            {/* ព័ត៌មានលម្អិត Product */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img className="w-48 h-48 object-contain" src={selectedProduct.image} alt={t(selectedProduct.nameKey)} />
              <h2 className="text-2xl font-bold text-slate-900">{t(selectedProduct.nameKey)}</h2>
              <p className="text-gray-600 text-sm">{t(selectedProduct.descKey)}</p>
              <span className="text-3xl font-extrabold text-red-500">${selectedProduct.price.toFixed(2)}</span>

              {/* ប៊ូតុងបង្កើន/បន្ថយចំនួន */}
              <div className="flex items-center gap-4 py-2">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-8 h-8 bg-gray-200 rounded-full font-bold text-lg"
                >
                  -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-8 h-8 bg-gray-200 rounded-full font-bold text-lg"
                >
                  +
                </button>
              </div>

              {/* ប៊ូតុង Confirm Order */}
              <button
                onClick={() => {
                  addToCart({
                    ...selectedProduct,
                    name: t(selectedProduct.nameKey)
                  }, quantity);
                  setSelectedProduct(null);
                  alert(`${t('addedSuccess')} ${t(selectedProduct.nameKey)} (${quantity})!`);
                }}
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition"
              >
                {t('confirmOrder')} (${(selectedProduct.price * quantity).toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Drink;