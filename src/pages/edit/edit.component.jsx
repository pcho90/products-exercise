import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './edit.styles.css';

const Edit = ({ products, setProducts }) => {
  const { id } = useParams();
  const product = products.find(item => item._id == id);
  const { push } = useHistory();
  const { name, description, price, imgURL, _id } = product;
  const [input, setInput] = useState({
    name: name,
    description: description,
    price: price,
    imgURL: imgURL,
    _id: _id
  });

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setProducts([...products.filter(item => item._id !== _id), input]);
    push(`/products/${id}`);
  };

  return (
    <div className='edit-page'>
      {product && (
        <form onSubmit={handleSubmit} className='edit-container'>
          <div className='edit-image-container'>
            <img src={product.imgURL} className='edit-image' />
            <input
              onChange={handleChange}
              className='edit-image-text'
              value={input.imgURL}
              name='imgURL'
            />
          </div>
          <div className='edit-content'>
            <input
              onChange={handleChange}
              className='edit-name'
              value={input.name}
              name='name'
            />
            <input
              onChange={handleChange}
              className='edit-price'
              value={input.price}
              name='price'
            />
            <textarea
              onChange={handleChange}
              rows='10'
              className='edit-description'
              value={input.description}
              name='description'
            />
            <div className='edit-buttons'>
              <button className='edit-button'>Save</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Edit;
