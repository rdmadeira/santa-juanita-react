export const SET_USER_CART = 'SET_USER_CART';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';

export const setUserCart = (cartItems) => ({
  type: SET_USER_CART,
  payload: cartItems,
});

export const logoutUser = () => ({ type: LOGOUT });

export const setUser = (userData) => ({ type: SET_USER, payload: userData });
