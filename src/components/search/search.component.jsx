import React, { useState } from 'react';

import products from '../../data/products.json';

import './search.styles.css';

const Search = ({ setData }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
    const filtered = products.filter(item =>
      item.name.includes(e.target.value)
    );
    setData(filtered);
  };

  return (
    <div className='search'>
      <input
        value={input}
        onChange={handleChange}
        className='search-bar'
        type='text'
        placeholder='Search'
      />
    </div>
  );
};

export default Search;
