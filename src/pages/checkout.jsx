import React, { useContext } from "react";
import { CartContext } from "provider/cart.provider";
import CheckoutItem from "components/checkout-item";
import StripeCheckoutButton from "components/stripe-button";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-body">
        {cartItems.map(cartItems => (
          <CheckoutItem key={cartItems.id} item={cartItems} />
        ))}
      </div>
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payment
        <br />
        4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default Checkout;
