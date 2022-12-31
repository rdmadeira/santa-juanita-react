import { checkItemInMyCart } from '../../utils/cart_utils/addItemOnCart';
const INITIAL_STATE = [];

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return [...checkItemInMyCart(action.payload, state)];
    case 'INCREMENT':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case 'DECREMENT':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
};
