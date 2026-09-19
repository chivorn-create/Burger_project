import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-red-950 text-white border-t border-slate-800 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* ផ្នែកទី ១៖ ព័ត៌មានហាង */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white">Burger King</h2>
          <p className="text-sm text-white leading-relaxed">
            {t('footerAboutDesc')}
          </p>
        </div>

        {/* ផ្នែកទី ២៖ លីងរហ័ស (Quick Links) */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">{t('pagesTitle')}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">{t('home')}</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-blue-400 transition-colors">{t('allMenu')}</Link>
            </li>
            <li>
              <Link to="/menu/burger" className="hover:text-blue-400 transition-colors">🍔 {t('burgerMenu')}</Link>
            </li>
            <li>
              <Link to="/menu/drink" className="hover:text-blue-400 transition-colors">🥤 {t('drinkMenu')}</Link>
            </li>
          </ul>
        </div>

        {/* ផ្នែកទី ៣៖ ទំនាក់ទំនង (Contact Us & Social Media) */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">{t('contactUs')}</h3>
          <p className="text-sm text-white">📞 {t('phone')}: 012 345 678 / 098 765 432</p>
          <p className="text-sm text-white">📍 {t('location')}: {t('phnomPenhCambodia')}</p>
          
          <div className="pt-2">
            <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">{t('followUs')}</p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                title="Facebook"
              >
                📘
              </a>

              {/* Telegram */}
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"
                title="Telegram"
              >
                ✈️
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
                title="TikTok"
              >
                🎵
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
                title="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* រក្សាសិទ្ធិ (Copyright) */}
      <div className="border-t border-white pt-4 text-center text-xs text-white">
        © {new Date().getFullYear()} MyBrand. {t('allRightsReserved')}
      </div>
    </footer>
  );
}

export default Footer;