import { checkItemInMyCart } from '../../utils/cart_utils/addItemOnCart';
const INITIAL_STATE = [];

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return [...checkItemInMyCart(action.payload, state)];
    default:
      return state;
  }
};
