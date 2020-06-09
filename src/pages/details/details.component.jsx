import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './details.styles.css';

const Details = ({ products, setProducts }) => {
  const { id } = useParams();
  const product = products.find(item => item._id == id);
  const { name, description, price, imgURL } = product;
  const { push } = useHistory();

  const handleDelete = () => {
    setProducts(products.filter(item => item._id != id));
    push('/products');
  };

  return (
    <div className='details'>
      {product && (
        <div className='detail'>
          <img src={imgURL} className='detail-image' />
          <div className='detail-content'>
            <div className='detail-name'>{name}</div>
            <div className='detail-price'>${price}</div>
            <div className='description'>{description}</div>
            <div className='detail-buttons'>
              <button
                className='detail-button'
                onClick={() => push(`/products/${id}/edit`)}
              >
                Edit
              </button>
              <button className='detail-button' onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
