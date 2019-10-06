import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { CartContext } from "provider/cart.provider";
import Button from "components/button";
import CartItem from "components/cart-item";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="message">Your cart is empty!</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          toggleHidden();
        }}
      >
        Go to checkout
      </Button>
    </div>
  );
};

export default withRouter(CartDropdown);
