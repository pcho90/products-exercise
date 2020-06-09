import React from 'react';
import { Link } from 'react-router-dom';

import './product-card.styles.css';

const ProductCard = ({ imgURL, _id }) => {
  return (
    <Link to={`/products/${_id}`} className='product-card'>
      <img src={imgURL} className='product-card-image' />
      <span className='product-label'>View</span>
    </Link>
  );
};

export default ProductCard;
