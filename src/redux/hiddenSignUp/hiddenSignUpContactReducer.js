import {
  TOGGLE_SIGN_IN_SHOW,
  TOGGLE_CART_SHOW,
  TOGGLE_USERMENU_SHOW,
  HIDDEN_NAV_MENU,
  SHOW_NAV_MENU,
} from './hiddenSignUpContactActions';

const INITIAL_STATE = {
  signInUpHidden: null,
  cartHidden: true,
  userMenuHidden: true,
  cartEffect: false,
  navMenuHidden: false,
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
    case HIDDEN_NAV_MENU:
      return { ...state, navMenuHidden: true };
    case SHOW_NAV_MENU:
      return { ...state, navMenuHidden: false };
    default:
      return state;
  }
};
