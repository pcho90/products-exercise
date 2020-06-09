import React, { useState } from 'react';

import './search.styles.css';

const Search = ({ products, setFiltered }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
    const filtered = products.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(filtered);
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
