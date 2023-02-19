import {
  ADD_ORDER_SUCCESS,
  INIT_ORDERS,
  GET_USER_ORDERS,
} from './ordersActions';

const INITIAL_STATE = [];

export const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ORDER_SUCCESS:
      return [...state, action.payload];

    case INIT_ORDERS:
      return INITIAL_STATE;

    case GET_USER_ORDERS:
      return [...action.payload];
    default:
      return state;
  }
};
