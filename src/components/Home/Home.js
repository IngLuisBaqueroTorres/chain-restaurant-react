import React, { Component } from 'react';
import './Home.css'; 
import { useTranslation } from 'react-i18next';



const Home = () => {
    const { t } = useTranslation();
    
    return (
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <h1>{t('home.title')}</h1>
            <p>{t('home.content')}</p>
          </div>
          <div style={{ width: '50%' }}>
            <img src="images/restaurant_1.jpg" alt="Imagen" />
          </div>
        </div>
      );
  
}

export default Home;
