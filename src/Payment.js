import React, { useState, useEffect } from 'react';
import axios from './axios';
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom"
import './Payment.css';
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import { db } from "./firebase";

const Payment = () => {

  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true); 

  useEffect(() => {
    // generate the special stripe secret which allows us to change a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [basket])

  const handleSubmit = async (e) => {
    // fancy stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation

      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })

      setSucceeded(true);
      setError(null);
      setProcessing(false);
      // not push because we dont want them to be in a loop, redirect to order page

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders')
    })
  }

  const handleChange = e => { 
    // Listen for changes in Card Element
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "")
  }

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
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                  <h3>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button disabled={
                  processing || disabled || succeeded
                  }>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {/*Errors*/}
                  {error && <div>{error}</div>}

              </form>
          </div>
        </div>
      
      </div>
   </div>
  )
}

export default Payment
