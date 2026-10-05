import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import burgerIcon from '../src/assets/Icon/burger_iconsvg.svg';
import cartIcon from '../src/assets/Icon/cart-shopping.svg';

function Nav({ cart = [] }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State សម្រាប់ បើក/បិទ Mobile Menu

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleMenuChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
      setIsOpen(false);
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white text-red-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-red-900">
          <img width="32" height="32" src={burgerIcon} alt="Burger King Logo" />
          <span className="leading-tight">Burger King</span>
        </Link>

        {/* Desktop Navigation (បង្ហាញតែលើ Laptop/Desktop - md:flex) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="font-bold px-3 py-2 rounded-lg hover:bg-gray-100 transition">
            {t('home')}
          </Link>

          <select
            onChange={handleMenuChange}
            defaultValue=""
            className="p-2 border-none rounded-lg font-bold text-red-900 bg-white cursor-pointer outline-none"
          >
            <option value="" disabled hidden>{t('menu')}</option>
            <option value="/burger">{t('burgerMenu')}</option>
            <option value="/drink">{t('drinkMenu')}</option>
          </select>

          <select 
            onChange={handleLanguageChange} 
            value={i18n.language}
            className="p-2 border-none rounded-lg font-bold text-red-900 bg-white cursor-pointer outline-none"
          >
            <option value="en">English</option>
            <option value="km">Khmer</option>
          </select>

          <Link to="/cart" className="relative p-2 rounded-lg hover:bg-gray-100 transition">
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Header Right Icons (បង្ហាញ Cart & Hamburger Menu លើ Mobile) */}
        <div className="flex md:hidden items-center gap-3">
          {/* Cart Icon លើ Mobile */}
          <Link to="/cart" className="relative p-1.5">
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* ប៊ូតុង Hamburger (☰ / ✕) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-red-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Icons X
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icons Hamburger (☰)
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer (បង្ហាញពេលចុច Hamburger) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t  px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="block font-bold py-2  text-red-900 ml-4"
          >
            {t('home')}
          </Link>

          <div className="space-y-1">
            <select
              onChange={handleMenuChange}
              defaultValue=""
              className=" p-2.5 border-none   font-bold text-red-900  outline-none"
            >
              <option value="" disabled hidden>{t('menu')}</option>
              <option value="/burger" className=' font-bold '> {t('burgerMenu')}</option>
              <option value="/drink" className=' font-bold '> {t('drinkMenu')}</option>
            </select>
          </div>

          <div className="space-y-1 pt-1">
            <select 
              onChange={handleLanguageChange} 
              value={i18n.language}
              className="w-25 p-2.5 border-none  font-bold text-red-900  outline-none"
            >
              <option value="en" className='  font-bold '>English</option>
              <option value="km" className='  font-bold '>Khmer</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;