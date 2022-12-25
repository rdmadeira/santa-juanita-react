import React from 'react';
import { useSelector } from 'react-redux';
import ProductosMain from '../components/Productos/ProductosMain.jsx';
import ProductArticle from '../components/Productos/ProductArticle.jsx';
import { StyledMain } from '../components/Productos/StyledMain.jsx';

const Sales = () => {
  let productosType = useSelector((store) => store.productos?.sales);
  return (
    <>
      <StyledMain>
        <ProductArticle articleContent={productosType.article} />
        <ProductosMain productos={productosType.productos} />
      </StyledMain>
    </>
  );
};

export default Sales;
