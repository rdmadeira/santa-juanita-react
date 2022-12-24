import {
  loadProducts,
  findProducts,
  getProductos,
  searchForm,
} from './functions.mjs';

/* ************************* Get Prtoducts *************************************************** */

async function asignProductos() {
  const productos = await getProductos();
  const productosPromo = productos.todoslosproductos.filter(
    (item) => item.promo === true
  );
  productos && loadProducts(productosPromo);
}

/* ************************* Show Prtoducts *************************************************** */

window.addEventListener('load', () => asignProductos());

/* *************************** Funcion find Products  ******************************************* */

searchForm.addEventListener('submit', (e) => findProducts(e));
