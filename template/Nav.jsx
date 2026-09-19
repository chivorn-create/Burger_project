import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <--- បានកែត្រឹមត្រូវនៅទីនេះ
import burgerIcon from '../src/assets/Icon/burger_iconsvg.svg';
import cartIcon from '../src/assets/Icon/cart-shopping.svg';

function Nav({ cart = [] }) {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <nav className="bg-white text-red-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-xl font-bold text-red-900 tracking-wide flex justify-center gap-2 items-center">
          <img width="30" height="30" src={burgerIcon} alt="Burger King Logo" />
          <Link to="/" className="hover:text-blue-300 transition-colors">
            Burger King
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-lg font-bold px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-red-900 transition-all duration-200"
          >
            Home
          </Link>

          {/* Menu Dropdown Container */}
          <div className="relative group">
            <div className="text-lg font-bold px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-red-900 transition-all duration-200 flex items-center gap-1 cursor-pointer">
              Menu
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Box */}
            <div className="absolute left-0 top-full pt-2 w-32 hidden group-hover:block z-50">
              <div className="bg-slate-800 rounded-xl shadow-xl border border-slate-700 overflow-hidden py-1">
                <Link
                  to="/burger"
                  className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Burger
                </Link>
                <Link
                  to="/drink"
                  className="block px-4 py-2.5 text-sm text-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Drink
                </Link>
              </div>
            </div>
          </div>

          {/* Language Switcher Dropdown */}
          <select 
            onChange={handleLanguageChange} 
            value={i18n.language}
            className="p-1 border rounded-md cursor-pointer outline-none font-bold"
          >
            <option value="en" className='font-bold'>English</option>
            <option value="km" className='font-bold'>Khmer</option>
          </select>

          {/* Cart Icon & Badge */}
          <Link
            to="/cart"
            className="relative text-lg font-bold hover:bg-gray-300 transition-all duration-200 p-2 rounded-lg flex items-center"
          >
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
            
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;