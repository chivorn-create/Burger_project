import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import រូបភាពឱ្យត្រូវតាម Vite/React Standard
import bigBurgerImg from '../src/assets/big_burgger.png';
import snakingImg from '../src/assets/snaking.png';
import hotLatteImg from '../src/assets/drink/hot_latte.png';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-red-950 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            {t('heroTitle')}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            {t('heroSubtitle')}
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              to="/Burger"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg"
            >
              {t('viewAllMenu')}
            </Link>
            <Link
              to="/menu/burger"
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 transition"
            >
              {t('orderBurger')}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Popular Items */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
          {t('popularTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img className="w-50" src={bigBurgerImg} alt="Cheese Burger" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Cheese Burger</h3>
              <p className="text-gray-600 text-sm mb-4">{t('cheeseBurgerDesc')}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-red-500">$4.50</span>
                <Link to="/burger" className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800">
                  {t('viewMore')}
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img className="w-40" src={hotLatteImg} alt="Iced Coffee" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Iced Coffee</h3>
              <p className="text-gray-600 text-sm mb-4">{t('icedCoffeeDesc')}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-red-500">$2.50</span>
                <Link to="/drink" className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800">
                  {t('viewMore')}
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img className="w-50" src={snakingImg} alt="French Fries" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">French Fries</h3>
              <p className="text-gray-600 text-sm mb-4">{t('frenchFriesDesc')}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-red-500">$2.00</span>
                <Link to="/burger" className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800">
                  {t('viewMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="bg-slate-100 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h4 className="font-bold text-slate-800">{t('fastDelivery')}</h4>
            <p className="text-gray-500 text-sm mt-1">{t('fastDeliveryDesc')}</p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-slate-800">{t('freshIngredients')}</h4>
            <p className="text-gray-500 text-sm mt-1">{t('freshIngredientsDesc')}</p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-slate-800">{t('easyPayment')}</h4>
            <p className="text-gray-500 text-sm mt-1">{t('easyPaymentDesc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;