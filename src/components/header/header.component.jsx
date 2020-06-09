import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => {
  return (
    <div className='nav'>
      <Link to='/' className='logo'>
        ProductsApp
      </Link>
      <span className='nav-links'>
        <Link to='/products' className='nav-link'>
          Products
        </Link>
        <Link to='/add-product' className='nav-link'>
          Add Product
        </Link>
      </span>
    </div>
  );
};

export default Header;
