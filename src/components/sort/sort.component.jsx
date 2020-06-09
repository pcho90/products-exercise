import React, { useState } from 'react';

import products from '../../data/products.json';

import './sort.styles.css';

const Sort = ({ setData }) => {
  const [input, setInput] = useState('az');

  const sort = dir => {
    let order;
    let val;
    if (dir === 'az') {
      order = -1;
      val = 'name';
    } else if (dir === 'za') {
      order = 1;
      val = 'name';
    } else if (dir === 'lh') {
      order = -1;
      val = 'price';
    } else {
      order = 1;
      val = 'price';
    }
    let sorted = [...products];
    sorted.sort((a, b) => {
      let diff = 0;
      if (a[val] > b[val]) {
        diff = -1;
      } else if (a[val] < b[val]) {
        diff = 1;
      }
      return diff * order;
    });
    setData(sorted);
  };

  const handleChange = e => {
    const value = e.target.value;
    setInput(value);
    sort(value);
  };

  return (
    <div className='sort'>
      <span>SORT BY: </span>
      <select value={input} className='select' onChange={handleChange}>
        <option value='az'>Alphabetically, A-Z</option>
        <option value='za'>Alphabetically, Z-A</option>
        <option value='lh'>Price, Low - High</option>
        <option value='hl'>Price, High - Low</option>
      </select>
    </div>
  );
};

export default Sort;
