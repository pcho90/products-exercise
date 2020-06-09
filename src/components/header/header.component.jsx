import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => {
  return (
    <div className='nav'>
      <Link to='/' className='logo'>
        ProductsApp
      </Link>
    </div>
  );
};

export default Header;
