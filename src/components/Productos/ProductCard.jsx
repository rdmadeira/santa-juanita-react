import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { addToCart } from '../../redux/cart/cartActions';
import { device } from '../../styles/media_queries/mediaQueries';
import { formatPrices } from '../../utils/products_utils/formatPrices';
import {
  hiddenSignUpAction,
  cartLogoEffectAction,
} from '../../redux/hiddenSignUp/hiddenSignUpContactActions';
import { StyledButton } from '../ui/Button.jsx';

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
  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 48%;
  } ;
`;
const BtnAgregar = styled(StyledButton)`
  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
          background-color: #c082a429;
        `
      : ''}
`;

const ProductImage = styled.img`
  aspect-ratio: 1.85;
  @media ${device.laptop} {
    width: 50%;
    height: 213px;
    border-radius: 0 0 15px 0;
  }
`;

const ProductTitle = styled.h3`
  padding: 0 7px;
  @media ${device.laptop} {
    width: 50%;
    order: 1;
  }
`;
const ProductDescription = styled.p`
  font-size: 15px;
  line-height: 1.5;
  flex: auto;
  padding: 0px 7px;
  @media ${device.laptop} {
    order: 0;
    width: 50%;
    padding: 5px 10px;
  }
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
  @media ${device.laptop} {
    order: 3;
  }
`;

const SizeSelect = styled.select`
  width: 50%;
  border: none;
  color: var(--pink-lavender);
  padding: 5px 5px;
  margin-left: 7px;
  @media ${device.laptop} {
    order: 2;
    width: unset;
  }
`;

export const ProductCard = ({ producto }) => {
  const [size, setSize] = useState('medium');
  const user = useSelector((store) => store.user);
  const stocks = useSelector((store) => store.stock);
  const dispatch = useDispatch();

  const verifyUserLogin = (prod) => {
    user && dispatch(addToCart(prod, size));
    !user && dispatch(hiddenSignUpAction(true));
  };

  const addItemHandle = (prod) => {
    verifyUserLogin(prod);
    dispatch(cartLogoEffectAction(true));
  };

  const stockButtonHandle = (id) => {
    const stock = stocks
      .map((item) => {
        if (item.id === id) {
          if (item.type === 'vela') {
            return item.stock[size];
          }
          return item.stock;
        }
        return false;
      })
      .find((item) => item);
    return stock > 0 ? '' : 'true';
  };

  /* const noStockProducts = () => {
    stocks
      .map((item) => {
        if (item.id === id) {
          if (item.type === 'vela') {
            return item.stock[size];
          }
          return item.stock;
        }
        return false;
      })
      .find((item) => item);
  } */

  return (
    <>
      <ProductCtn>
        {}
        <ProductImage src={producto.img} alt={producto.name} />
        <ProductTitle style={{ padding: '0 7px' }}>
          {producto.name}
        </ProductTitle>
        <ProductDescription>{producto.description}</ProductDescription>
        {producto.type === 'vela' && (
          <SizeSelect onChange={(e) => setSize(e.target.value)}>
            <option value="medium">Mediano</option>
            <option value="big">Grande</option>
          </SizeSelect>
        )}
        <BtnAgregar
          onClick={() => addItemHandle(producto)}
          device={device.laptop}
          disabled={stockButtonHandle(producto.id)}>
          {user ? 'Agregar al Carrito' : 'Entrá en su tienda'}
        </BtnAgregar>
        <ProductPrice>
          {producto.type === 'vela'
            ? formatPrices(producto.content[size].price)
            : formatPrices(producto.price)}
        </ProductPrice>
      </ProductCtn>
    </>
  );
};
