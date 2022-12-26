export const addToCart = (prod) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: prod,
  };
};
