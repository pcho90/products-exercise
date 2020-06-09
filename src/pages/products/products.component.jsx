import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import products from '../../data/products.json';

import './products.styles.css';
import Search from '../../components/search/search.component';
import Sort from '../../components/sort/sort.component';

const Products = () => {
  const [data, setData] = useState(products);

  return (
    <div className='products'>
      <Search setData={setData} />
      <Sort setData={setData} />
      <div className='products-body'>
        {data.map(({ imgURL, name, price, _id }) => (
          <Link to={`products/${_id}`} className='product'>
            <img className='product-image' src={imgURL} />
            <div className='product-name'>{name}</div>
            <div className='product-price'>${price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
