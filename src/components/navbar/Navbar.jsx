import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <ul className="links">
          <li><Link to="/"> Inicio </Link></li>
          <li><Link to="/favorites"> Favoritos </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;