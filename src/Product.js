import React from 'react';
import { useStateValue } from './StateProvider';
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {

  const [ dispatch ] = useStateValue();



    const addToBasket = () => {
      // dispatch action to data layer
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt="Start up" />
      <button onClick={addToBasket}> Add to Basket</button>
    </div>
  )
}

export default Product
