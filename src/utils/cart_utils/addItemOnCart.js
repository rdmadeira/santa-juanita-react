export const checkItemInMyCart = (itemToAdd, myCart) => {
  const existingItem = myCart.find((producto) => producto.id === itemToAdd.id);

  if (existingItem) {
    return myCart.map((cartItem) => {
      return cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...myCart, { ...itemToAdd, quantity: 1 }];
};
