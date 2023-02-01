export const ADD_ORDER_START = 'ADD_ORDER_START';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAIL = 'ADD_ORDER_FAIL';

import { createOrder } from '../../utils/orders_utils/ordersUtils';

export const createOrderSuccess = (user, cart) => ({
  type: ADD_ORDER_SUCCESS,
  payload: createOrder(user, cart),
});
