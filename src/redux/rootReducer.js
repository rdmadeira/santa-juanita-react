import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartReducer';
import { usersReducer } from './users/usersReducer';
import { userReducer } from './user/userReducer';
import { productosReducer } from './productos/productosReducer';
import { hiddenSignUpContactReducer } from './hiddenSignUp/hiddenSignUpContactReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  user: userReducer,
  productos: productosReducer,
  hiddenComponents: hiddenSignUpContactReducer,
});
