import React from 'react';

import './homepage.styles.css';

import ProductCard from '../../components/product-card/product-card.component';

const Homepage = ({ products }) => {
  return (
    <div className='homepage'>
      <span className='title'>LATEST</span>
      <div className='latest'>
        {products &&
          products.map(({ imgURL, _id }) => (
            <ProductCard {...{ imgURL, _id }} />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
