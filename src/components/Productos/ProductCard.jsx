import React from 'react';
import styled from 'styled-components';

const ProductCtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  row-gap: 20px;
  overflow: hidden;
  border: 1px solid var(--thistle);
  border-radius: 15px 15px 15px 0;
  color: var(--opera-mauve);
  transition: 0.4s transform ease-out;
`;

const ProductDescription = styled.p`
  font-size: 15px;
  line-height: 1.5;
  flex: auto;
  padding: 0px 7px;
`;

const ProductPrice = styled.p`
  font-size: 24px !important;
  font-weight: 800;
  color: var(--snow);
  align-self: flex-end;
  background-color: var(--twilight-lavender);
  padding: 10px 15px 10px 15px;
  width: 100%;
  text-align: end;
  border-radius: 0 0 15px 0;
`;

const SizeSelect = styled.select`
  width: 50%;
  border: none;
  color: var(--pink-lavender);
  padding: 5px 5px;
  margin-left: 7px;
`;

export const ProductCard = ({ producto }) => {
  return (
    <>
      <ProductCtn>
        <img src={producto.img} alt={producto.name} />
        <h3 style={{ padding: '0 7px' }}>{producto.name}</h3>
        <ProductDescription>{producto.description}</ProductDescription>
        {producto.type === 'vela' && (
          <SizeSelect>
            <option value="medium">Mediano</option>
            <option value="big">Grande</option>
          </SizeSelect>
        )}
        <ProductPrice>{producto.price}</ProductPrice>
      </ProductCtn>
    </>
  );
};
