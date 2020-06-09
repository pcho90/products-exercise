import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './add.styles.css';

const Add = ({ products, setProducts }) => {
  const { push } = useHistory();

  const [input, setInput] = useState({
    name: '',
    price: '',
    description: '',
    imgURL: '',
    _id: uuidv4()
  });

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setProducts([...products, input]);
    push('/products');
  };

  return (
    <div className='add-page'>
      <form className='add-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          className='add-name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='price'
          placeholder='Price'
          className='add-price'
          onChange={handleChange}
        />
        <textarea
          name='description'
          type='text'
          placeholder='Description'
          className='add-description'
          onChange={handleChange}
          rows='10'
        />
        <input
          type='text'
          name='imgURL'
          placeholder='Image Link'
          className='add-image'
          onChange={handleChange}
        />
        <button type='text' className='add-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
