import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartReducer';
import { usersReducer } from './users/usersReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  user: userReducer,
});
