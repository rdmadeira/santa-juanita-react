import React from 'react';
import { useSelector } from 'react-redux';
import ProductosMain from '../components/Productos/ProductosMain.jsx';
import { StyledMain } from '../components/Productos/StyledMain.jsx';

const Products = ({ setHiddenSignInUp }) => {
  let productos = useSelector((store) => store.productos?.todoslosproductos);
  return (
    <StyledMain>
      <ProductosMain
        productos={productos}
        setHiddenSignInUp={setHiddenSignInUp}
      />
    </StyledMain>
  );
};

export default Products;
