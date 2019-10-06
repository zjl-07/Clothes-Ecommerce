import React, { useContext } from "react";
import { CartContext } from "provider/cart.provider";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className="cart" onClick={toggleHidden}>
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <div className="count">{cartItemsCount}</div>
    </div>
  );
};

export default CartIcon;
