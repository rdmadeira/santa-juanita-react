import { SET_USER_CART, LOGOUT } from './userActions';

const INITIAL_STATE = null;

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case LOGOUT:
      return INITIAL_STATE;
    case SET_USER_CART:
      return {
        ...state,
        myCart: action.payload,
      };
    default:
      return state;
  }
};
