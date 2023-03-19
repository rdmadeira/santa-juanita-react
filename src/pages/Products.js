import React from 'react';
import ProductosMain from '../components/Productos/ProductosMain.jsx';
import { StyledMain } from '../components/Productos/StyledMain.jsx';
import {
  getProductsFromDataBase,
  getStockFromDataBase,
} from '../firebase/firebase_utils';
import { useQuery } from 'react-query';

const Products = () => {
  const {
    data: productos,
    isLoading: isLoadingProductos,
    /* error: errorProductos,
    isError: isErrorProductos, */
  } = useQuery('productos', () => getProductsFromDataBase());

  const {
    data: stock,
    /*isLoading: isLoadingStock,
     error: errorStock,
    isError: isErrorStock, */
  } = useQuery('stock', () => getStockFromDataBase(), {
    /* enabled: !!productos, */
  });

  return (
    <StyledMain>
      {isLoadingProductos && <h1>...Loading...</h1>}
      {productos && (
        <ProductosMain
          productos={productos?.todoslosproductos?.productos}
          prestock={stock}
        />
      )}
    </StyledMain>
  );
};

export default Products;
