import React from 'react';
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct  from "./CheckoutProduct";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item => (
        <CheckoutProduct
          id={order.id}
          title={order.title}
          image={order.image}
          price={order.price}
          rating={order.rating}
          hideButton
          />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total:{value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        /> 
    </div>
  )
}

export default Order
