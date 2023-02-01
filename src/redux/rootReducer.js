import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartReducer';
import { usersReducer } from './users/usersReducer';
import { userReducer } from './user/userReducer';
import { ordersReducer } from './orders/ordersReducer';
import { productosReducer } from './productos/productosReducer';
import { hiddenSignUpContactReducer } from './hiddenSignUp/hiddenSignUpContactReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
  productos: productosReducer,
  hiddenComponents: hiddenSignUpContactReducer,
});
