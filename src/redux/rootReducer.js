import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartReducer';
import { usersReducer } from './users/usersReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
});
