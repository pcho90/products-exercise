import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './products.styles.css';
import Search from '../../components/search/search.component';
import Sort from '../../components/sort/sort.component';

const Products = ({ products, setProducts, filtered, setFiltered }) => {
  useEffect(() => {
    setFiltered(products);
  }, [products]);

  return (
    <div className='products'>
      <Search {...{ products, setFiltered }} />
      <Sort {...{ products, setProducts }} />
      <div className='products-body'>
        {filtered.map(({ imgURL, name, price, _id }) => (
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
