export const TOGGLE_SIGN_IN_SHOW = 'TOGGLE_SIGN_IN_SHOW';
export const TOGGLE_CART_SHOW = 'TOGGLE_CART_SHOW';
export const TOGGLE_USERMENU_SHOW = 'TOGGLE_USERMENU_SHOW';
export const HIDDEN_NAV_MENU = 'HIDDEN_NAV_MENU';
export const SHOW_NAV_MENU = 'SHOW_NAV_MENU';

import {
  device,
  maxDeviceWidth,
} from '../../styles/media_queries/mediaQueries';

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

export const navMenuHiddenAction = (mediaQuery) => {
  switch (mediaQuery) {
    case maxDeviceWidth.mobileL:
      return { type: HIDDEN_NAV_MENU };
    case device.mobileL:
      return { type: SHOW_NAV_MENU };
  }
};
