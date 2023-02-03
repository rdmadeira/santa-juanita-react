import {
  TOGGLE_SIGN_IN_SHOW,
  TOGGLE_CART_SHOW,
  TOGGLE_USERMENU_SHOW,
} from './hiddenSignUpContactActions';

const INITIAL_STATE = {
  signInUpHidden: null,
  cartHidden: true,
  userMenuHidden: true,
  cartEffect: false,
};

export const hiddenSignUpContactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIGN_IN_SHOW:
      return { ...state, signInUpHidden: action.payload };
    case TOGGLE_CART_SHOW:
      return { ...state, cartHidden: !state.cartHidden };
    case TOGGLE_USERMENU_SHOW:
      return { ...state, userMenuHidden: !state.userMenuHidden };
    case 'INIT_LOGO_EFECT':
      return {
        ...state,
        cartEffect: action.payload,
      };
    default:
      return state;
  }
};
