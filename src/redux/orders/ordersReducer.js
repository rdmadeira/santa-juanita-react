import { ADD_ORDER_SUCCESS } from './ordersActions';

const INITIAL_STATE = [];

export const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ORDER_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};
