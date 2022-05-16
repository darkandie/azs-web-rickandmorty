import React from 'react';
import FavoriteBox from '../../components/favoriteBox/Favorites';
import Navbar from '../../components/navbar/Navbar';

import './styles.scss';

const Favorites = () => {
  return (
    <>
      <Navbar />
      <FavoriteBox />
    </>
  )
}

export default Favorites;