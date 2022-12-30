export const checkItemInMyCart = (itemToAdd, myCart) => {
  const existingItem = myCart.find((producto) => {
    if (itemToAdd.type === 'vela') {
      return producto.id === itemToAdd.id && producto.size === itemToAdd.size;
    }

    return producto.id === itemToAdd.id;
  });

  if (existingItem) {
    return myCart.map((cartItem) => {
      return cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [
    ...myCart,
    {
      ...itemToAdd,
      quantity: 1,
      price: itemToAdd.price,
      size: itemToAdd.size,
      sub_description: itemToAdd.sub_description,
    },
  ];
};
