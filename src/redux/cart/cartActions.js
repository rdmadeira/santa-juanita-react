export const addToCart = (producto, size) => {
  if (producto.type === 'vela') {
    return {
      type: 'ADD_ITEM_TO_CART',
      payload: {
        ...producto,
        size: size,
        price: producto.content[size].price,
        sub_description: producto.content[size].description,
      },
    };
  } else {
    return {
      type: 'ADD_ITEM_TO_CART',
      payload: {
        ...producto,
        size: size,
        price: producto.price,
      },
    };
  }
};

export const changeQuantityItem = (string, item) => {
  return {
    type: string,
    payload: { ...item },
  };
};

export const deleteItemAction = (cartItem) => {
  return {
    type: 'DELETE_ITEM',
    payload: cartItem,
  };
};
