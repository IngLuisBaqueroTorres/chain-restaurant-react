import React, { useState } from 'react';
import './Header.css'; 
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/index';

const Header = () => {

    const [language, setLanguage] = useState('es');

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="images/food-logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/">{t('header.home')}</a></li>
          <li><a href="/about">{t('header.aboutUs')}</a></li>
          <li><a href="/places">{t('header.places')}</a></li>
          <li><a href="/contact">{t('header.contactUs')}</a></li>
          {/* Otros elementos del menú */}
        </ul>
        <div className="language-switch">
        <button onClick={() => {
            setLanguage(language === 'en' ?'es': 'en');
            changeLanguage(language);
        }}>{language.toUpperCase()}</button>
      </div>
      </nav>
    </header>
  );
};

export default Header;
