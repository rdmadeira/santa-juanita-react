import { getProductsData } from '../../utils/products_utils/getProductsData';

export const DECREMENT_STOCK = 'DECREMENT_STOCK';
export const GET_INIT_STOCK = 'GET_INIT_STOCK';
export const UPDATE_STOCK_STORE = 'UPDATE_STOCK_STORE';

export const getInitStock = () => {
  return async (dispatch) => {
    const productos = await getProductsData();
    const updatedStocks = await productos.todoslosproductos.map((producto) => {
      if (producto.type === 'vela')
        return {
          id: producto.id,
          type: 'vela',
          stock: {
            medium: producto.content.medium.stock,
            big: producto.content.big.stock,
          },
        };
      return {
        id: producto.id,
        stock: producto.stock,
      };
    });
    (await updatedStocks) &&
      dispatch({
        type: GET_INIT_STOCK,
        payload: updatedStocks,
      });
  };
};

export const sendStockToStore = (stock) => ({
  type: UPDATE_STOCK_STORE,
  payload: stock,
});

export const decrementStock = (cart, stocks) => {
  const updatedStocks = stocks.map((item) => {
    cart.forEach((producto) => {
      if (item.id === producto.id) {
        if (producto.type === 'vela') {
          console.log(item);
          item = {
            ...item,
            stock: {
              ...item.stock,
              [producto.size]:
                item.stock[producto.size] > 0
                  ? item.stock[producto.size] - producto.quantity
                  : 0,
            },
          };
        } else {
          item = {
            ...item,
            stock: item.stock > 0 ? item.stock - producto.quantity : 0,
          };
        }
      }
    });
    return item;
    /* if (producto.id === stocks.id) {
      if (producto.type === 'vela') {
        return {
          ...producto,
          stock: {
            ...producto.stock,
            [size]: producto.stock[size] > 0 ? producto.stock[size] - 1 : 0,
          },
        };
      }
      return {
        ...producto,
        stock: producto.stock - 1,
      };
    } */
  });
  return { type: DECREMENT_STOCK, payload: updatedStocks };
};
