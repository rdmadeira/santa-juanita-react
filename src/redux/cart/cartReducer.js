import {
  checkItemInMyCart,
  deleteItemFromCart,
} from '../../utils/cart_utils/addItemOnCart';
const INITIAL_STATE = [];

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return [...checkItemInMyCart(action.payload, state)];
    case 'INCREMENT':
      return state.map((item) => {
        if (action.payload.type === 'vela') {
          return item.id === action.payload.id &&
            item.size === action.payload.size
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        } else {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }
      });
    case 'DECREMENT':
      return state.map((item) => {
        if (action.payload.type === 'vela') {
          return item.id === action.payload.id &&
            item.size === action.payload.size
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        } else {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }
      });
    case 'DELETE_ITEM':
      return [...deleteItemFromCart(action.payload, state)];

    case 'RESET':
      return INITIAL_STATE;

    default:
      return state;
  }
};
