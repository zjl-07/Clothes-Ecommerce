import React, { useContext } from "react";
import { CartContext } from "provider/cart.provider";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { deleteItem, addItem, clearItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <i className="fa fa-chevron-left" onClick={() => deleteItem(item)}></i>
        <span className="value">{quantity}</span>
        <i className="fa fa-chevron-right" onClick={() => addItem(item)}></i>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => clearItemFromCart(item)}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default CheckoutItem;
