import React from 'react';
import headerBanner from '../../images/header-banner.jpg';

import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="bannerContainer">
          <img src={headerBanner} alt="banner"/>
        </div>
        <div className="descContainer">
          <h1>Acompanhe as aventuras de Rick e Morty</h1>
          <p>Todos os episódios disponíveis!</p>
        </div>
      </div>
    </div>
  )
}

export default Header;