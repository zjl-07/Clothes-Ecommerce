import React, { createContext, useState, useEffect } from "react";
import {
  addItemToCart,
  deleteItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartItemsTotal
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  toggleHidden: () => {},
  addItem: () => {},
  deleteItem: () => {},
  clearItemFromCart: () => {}
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleHidden = () => setHidden(!hidden);
  const deleteItem = item => setCartItems(deleteItemFromCart(cartItems, item));
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => setCartItemsCount(getCartItemsCount(cartItems)), [cartItems]);
  useEffect(() => setCartTotal(getCartItemsTotal(cartItems)), [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItems,
        cartItemsCount,
        cartTotal,
        toggleHidden,
        addItem,
        deleteItem,
        clearItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
