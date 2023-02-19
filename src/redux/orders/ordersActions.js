export const ADD_ORDER_START = 'ADD_ORDER_START';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAIL = 'ADD_ORDER_FAIL';
export const INIT_ORDERS = 'INIT_ORDERS';
export const GET_USER_ORDERS = 'GET_USER_ORDERS';

import { createOrder } from '../../utils/orders_utils/ordersUtils';

export const createOrderSuccess = (user, cart) => ({
  type: ADD_ORDER_SUCCESS,
  payload: createOrder(user, cart),
});

export const initOrders = () => ({ type: INIT_ORDERS });

export const getUserOrders = (user) => ({
  type: GET_USER_ORDERS,
  payload: user.orders,
});
