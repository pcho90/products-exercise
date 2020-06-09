import React from 'react';
import { useParams } from 'react-router-dom';

import products from '../../data/products.json';

import './details.styles.css';

const Details = () => {
  const { id } = useParams();
  const product = products.find(item => item._id === id);
  return (
    <div className='details'>
      {product && (
        <div className='detail'>
          <img src={product.imgURL} className='detail-image' />
          <div className='detail-content'>
            <div className='detail-name'>{product.name}</div>
            <div className='detail-price'>${product.price}</div>
            <div className='description'>{product.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
