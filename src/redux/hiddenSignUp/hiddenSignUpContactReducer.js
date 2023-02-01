import {
  TOGGLE_SIGN_IN_SHOW,
  TOGGLE_CART_SHOW,
} from './hiddenSignUpContactActions';

const INITIAL_STATE = { signInUpHidden: null, cartHidden: true };

export const hiddenSignUpContactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIGN_IN_SHOW:
      return { ...state, signInUpHidden: action.payload };
    case TOGGLE_CART_SHOW:
      return { ...state, cartHidden: !state.cartHidden };
    default:
      return state;
  }
};
