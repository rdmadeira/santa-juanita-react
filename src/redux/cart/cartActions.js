export const addToCart = (producto, size) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: {
      ...producto,
      size: size,
      price: producto.content.size?.price || producto.price,
    },
  };
};
