export const SET_USER_CART = 'SET_USER_CART';
export const LOGOUT = 'LOGOUT';

export const setUserCart = (cartItems) => ({
  type: SET_USER_CART,
  payload: cartItems,
});

export const logoutUser = () => ({ type: LOGOUT });
