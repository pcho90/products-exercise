import React, { useState } from 'react';

import { sort } from '../../utils/sort';

import './sort.styles.css';

const Sort = ({ products, setProducts }) => {
  const [input, setInput] = useState('az');

  const handleChange = e => {
    const value = e.target.value;
    setInput(value);
    setProducts(sort(value, products));
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
