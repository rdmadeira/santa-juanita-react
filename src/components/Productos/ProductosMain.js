import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LoadingPage from './LoadingPage.jsx';
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

const ProductosMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const productos = useSelector((store) => store.productos.todoslosproductos);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <ProductsContain>
          {productos.map((producto) => (
            <Producto producto={producto} key={producto.name} />
          ))}
        </ProductsContain>
      )}
    </>
  );
};

export default ProductosMain;
