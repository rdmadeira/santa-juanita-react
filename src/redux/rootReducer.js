import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartReducer';
import { userReducer } from './user/userReducer';

import { productosReducer } from './productos/productosReducer';
import { hiddenSignUpContactReducer } from './hiddenSignUp/hiddenSignUpContactReducer';
import { stockReducer } from './stock/stockReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  productos: productosReducer,
  hiddenComponents: hiddenSignUpContactReducer,
  stock: stockReducer,
});
