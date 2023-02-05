import { DECREMENT_STOCK, GET_INIT_STOCK } from './stockActions';

const INITIAL_STATE = null;

export const stockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DECREMENT_STOCK:
      return action.payload;
    case GET_INIT_STOCK:
      return action.payload;
    default:
      return state;
  }
};
