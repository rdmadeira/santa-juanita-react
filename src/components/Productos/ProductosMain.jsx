import React from 'react';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ProductCard as Producto } from './ProductCard.jsx';

const ProductsContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--lavender-blush);
  justify-content: center;
  align-items: stretch;
  gap: 20px 10px;
  padding: 50px 0;
  width: 100%;
`;

const ProductosMain = ({ productos, prestock }) => {
  return (
    <>
      <ProductsContain>
        {productos?.map((producto) => (
          <Producto
            producto={producto}
            prestock={prestock}
            key={producto.name + producto.id}
          />
        ))}
      </ProductsContain>
    </>
  );
};

export default ProductosMain;
