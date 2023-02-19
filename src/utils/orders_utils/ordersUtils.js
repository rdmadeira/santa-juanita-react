import { v4 as uuidv4 } from 'uuid';
import { SHIPPING_COST } from '../constants';

export const createOrder = (user, cart) => {
  const subTotal = cart.reduce((acc, item) => {
    return (acc = acc + item.price * item.quantity);
  }, 0);
  const now = new Date();
  return {
    id: uuidv4(),
    items: cart,
    shipping_cost: SHIPPING_COST,
    sub_total: subTotal,
    userId: user.id,
    createdAt: now,
    total: SHIPPING_COST + subTotal,
    status: 'pendiente',
  };
};

export const convertTimestampToDate = (timestampObject) => {
  const timestamp = new Date(
    timestampObject.seconds + timestampObject.nanoseconds / 1000000000
  );
  console.log(timestamp);
  return timestamp;
};

export const dateFormat = (date) => {
  const fecha = new Date(date);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles',
  };

  return new Intl.DateTimeFormat('es-AR', options).format(fecha);
};
