import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartReducer';
import { userReducer } from './user/userReducer';

import { hiddenSignUpContactReducer } from './hiddenSignUp/hiddenSignUpContactReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  hiddenComponents: hiddenSignUpContactReducer,
});
