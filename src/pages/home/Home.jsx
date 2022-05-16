import React from 'react';

import Header from '../../components/header/Header';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';

import './styles.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <List />
    </>  
  )
}

export default Home;