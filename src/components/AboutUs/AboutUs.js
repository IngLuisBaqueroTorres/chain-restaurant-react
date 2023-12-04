import React from 'react';
import './AboutUs.css'; 
import { useTranslation } from 'react-i18next';



const AboutUs = () => {
    const { t } = useTranslation();
    
    return (
        <div className='columns'>
          <div style={{ width: '50%' }}>
          <img src="images/restaurant_2.jpg" alt="Imagen" />
          </div>

          <div style={{ width: '50%', paddingRight:'60px' }}>
            <h1>{t('aboutUs.title')}</h1>
            <p>{t('aboutUs.content')}</p>
            <div style={{ marginLeft: '80px' }}>
                <button className='button-red'>{t('aboutUs.btnLearn')} <span><img src="images/greater-than-white.svg" alt='Greater'></img></span></button>
            </div>
          </div>
        </div>
    );
  
}

export default AboutUs;
