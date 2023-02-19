import {
  SET_USER_CART,
  LOGOUT,
  SET_USER,
  ADD_ORDER_SUCCESS,
} from './userActions';

const INITIAL_STATE = null;

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT:
      return INITIAL_STATE;
    case SET_USER_CART:
      return {
        ...state,
        myCart: action.payload,
      };
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders
          ? [...state.orders, action.payload]
          : [action.payload],
      };
    default:
      return state;
  }
};
