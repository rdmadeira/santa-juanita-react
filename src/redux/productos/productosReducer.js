// import productos from '../../utils/products_utils/products.mjs';

const INITIAL_STATE = null;

export const productosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INIT_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};
