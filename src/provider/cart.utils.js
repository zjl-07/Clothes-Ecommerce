export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItems => cartItems.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const deleteItemFromCart = (cartItems, itemToBeDelete) => {
  if (itemToBeDelete.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToBeDelete.id);
  }

  return cartItems.map(item =>
    item.id === itemToBeDelete.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id);

export const getCartItemsCount = cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );
export const getCartItemsTotal = cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
