import React from 'react';
import { useSelector } from 'react-redux';
import ProductosMain from '../components/Productos/ProductosMain.jsx';
import { StyledMain } from '../components/Productos/StyledMain.jsx';

const Products = () => {
  let productos = useSelector(
    (store) => store.productos?.todoslosproductos.productos
  );

  return (
    <StyledMain>
      <ProductosMain productos={productos} />
    </StyledMain>
  );
};

export default Products;
