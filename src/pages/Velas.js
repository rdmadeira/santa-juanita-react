import React from 'react';
import { useSelector } from 'react-redux';
import { StyledMain } from '../components/Productos/StyledMain.jsx';
import ProductosMain from '../components/Productos/ProductosMain.jsx';
import ProductArticle from '../components/Productos/ProductArticle.jsx';
// import LoadingPage from '../components/Productos/LoadingPage.jsx';

const Velas = () => {
  let productosType = useSelector((store) => store.productos?.velas);

  return (
    <StyledMain>
      <ProductArticle articleContent={productosType.article} />
      <ProductosMain productos={productosType.productos} />
    </StyledMain>
  );
};

export default Velas;
