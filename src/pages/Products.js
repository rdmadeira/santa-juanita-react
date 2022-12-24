import React from 'react';
import styled from 'styled-components';
import ProductosMain from '../components/Productos/ProductosMain';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background: #c99191b3;
`;

const Products = () => {
  return (
    <StyledMain>
      <ProductosMain />
    </StyledMain>
  );
};

export default Products;
