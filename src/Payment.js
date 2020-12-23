import React from 'react';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom"
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';

const Payment = () => {

  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
            <h1>
              Checkout (<Link to="/checkout">{basket?.length} items</Link>) 
            </h1>

        <div className="payment_section">
          <div className="payment_title">
            <p>Delivery Address</p>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>5201 NW 122 Pl</p>
            <p>Doral, Fl</p>
          </div>
        </div>
          
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map(item => (
              <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />
              ))}
          </div>
        </div>
        
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Details</h3>
          </div>
          <div className="payment_details">

          </div>
        </div>
      
      </div>
   </div>
  )
}

export default Payment
