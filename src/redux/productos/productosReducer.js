import productos from '../../data/products.mjs';
const INITIAL_STATE = productos;

export const productosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
