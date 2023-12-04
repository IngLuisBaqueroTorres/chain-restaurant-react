import React from 'react';
import './Home.css'; 
import { useTranslation } from 'react-i18next';



const Home = () => {
    const { t } = useTranslation();
    
    return (
        <div className='columns'>
          <div style={{ width: '50%' }}>
            <h1>{t('home.title')}</h1>
            <p>{t('home.content')}</p>
            
            <div className='columnsB'>
              <div style={{ marginRight: '15px' }}>
                <button className='button-red'>{t('home.btnBuy')} <span><img src="images/shopping-cart.svg" alt='Cart'></img></span></button>
              </div>
              <div>
                <button className='button'>{t('home.btnSee')} <span><img src="images/greater-than.svg" alt='Greater'></img></span></button>
              </div>
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <img src="images/restaurant_1.jpg" alt="Imagen" />
          </div>
        </div>
      );
  
}

export default Home;
