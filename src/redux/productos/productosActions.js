// Con base en el video de midudev: https://www.youtube.com/watch?v=M9eX2AvFwoE&ab_channel=midudev.
// 1- Se creó una actionCreator que retorna una función y no un objeto;
// 2- la función que retorna esta acción es asíncrona;
// 3- Se toma como parametro el dispatch;
// 4- En el archivo que ejecuta la acción (en este caso, en pages/Products.js), el mismo al cargar,
// se ejecuta el dispatch de Redux con useEffect

import { getProductsData } from '../../utils/products_utils/getProductsData';

export const getProducts = () => {
  return async (dispatch) => {
    const products = await getProductsData(); // en utils/product_utils. Es buena practica no utilizar el fetch o axios adentro de esta logica, y sí tener una lógica a parte. Esta función tiene como finalidad solamente crear el dispatch asyncrono.

    dispatch({ type: 'GET_INIT_PRODUCTS', payload: products });
  };
};

export const sendProductsToStore = (productos) => {
  return { type: 'UPDATE_PRODUCTS_STORE', payload: productos };
};
