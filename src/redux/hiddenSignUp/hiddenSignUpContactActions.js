export const TOGGLE_SIGN_IN_SHOW = 'TOGGLE_SIGN_IN_SHOW';
export const TOGGLE_CART_SHOW = 'TOGGLE_CART_SHOW';
export const TOGGLE_USERMENU_SHOW = 'TOGGLE_USERMENU_SHOW';

export const hiddenSignUpAction = (boolean) => {
  return {
    type: TOGGLE_SIGN_IN_SHOW,
    payload: boolean,
  };
};

export const toggleCart = () => ({ type: TOGGLE_CART_SHOW });

export const toggleUserMenu = () => ({ type: TOGGLE_USERMENU_SHOW });

export const cartLogoEffectAction = (boolean) => ({
  type: 'INIT_LOGO_EFECT',
  payload: boolean,
});
