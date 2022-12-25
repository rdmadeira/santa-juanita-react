export const getProductsData = () =>
  fetch('./data/productos.json')
    .then((res) => res.json())
    .then((data) => data);
