import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import styled, { css } from 'styled-components';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Text } from '@chakra-ui/react';
import { addToCart } from '../../redux/cart/cartActions';
import {
  device,
  maxDeviceWidth,
} from '../../styles/media_queries/mediaQueries';
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
  position: relative;

  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 48%;
  }

  @media ${maxDeviceWidth.tablet} and (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 75%;
  }
  @media ${maxDeviceWidth.mobileL}, (orientation: portrait) {
    width: 95%;
  }
`;

const NoStockShadow = styled.div`
  position: absolute;
  background-color: #ffffffae;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 30%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
`;

const BtnAgregar = styled(StyledButton)`
  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
          background-color: #c082a429;
        `
      : ''}
  @media ${maxDeviceWidth.tablet} and (orientation: landscape), ${device.laptop} {
    display: flex;
    width: unset;
    order: 3;
    margin-left: 10px;
  }
`;

const ProductImage = styled.img`
  aspect-ratio: 1.85;
  @media ${maxDeviceWidth.tablet} and (orientation: landscape),
    ${device.laptop} {
    width: 50%;
    height: 213px;
    border-radius: 0 0 15px 0;
  }
`;

const ProductTitle = styled(Text)`
  padding: 0 7px;
  @media ${maxDeviceWidth.tablet} and (orientation: landscape),
    ${device.laptop} {
    width: 50%;
    display: flex;
    order: 1;
  }
`;
const ProductDescription = styled.p`
  font-size: 15px;
  line-height: 1.5;
  flex: auto;
  padding: 0px 7px;
  @media ${maxDeviceWidth.tablet} and (orientation: landscape),
    ${device.laptop} {
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
  @media ${maxDeviceWidth.tablet} and (orientation: landscape),
    ${device.laptop} {
    order: 4;
  }
`;

const SizeSelect = styled.select`
  width: 50%;
  border: none;
  color: var(--pink-lavender);
  padding: 5px 5px;
  margin-left: 7px;
  z-index: 3;
  @media ${maxDeviceWidth.tablet} and (orientation: landscape),
    ${device.laptop} {
    order: 2;
    width: unset;
    display: flex;
  }
`;

export const ProductCard = ({ producto, prestock }) => {
  const [size, setSize] = useState('medium');
  const user = useSelector((store) => store.user);
  const stock = prestock
    .map((item) => {
      if (item.id === producto.id) {
        if (item.type === 'vela') {
          return item.stock[size];
        }
        return item.stock;
      }
      return false;
    })
    .find((item) => item || item === 0);
  const dispatch = useDispatch();

  const verifyUserLogin = (prod) => {
    user && dispatch(addToCart(prod, size));
    !user && dispatch(hiddenSignUpAction(true));
  };

  const addItemHandle = (prod) => {
    verifyUserLogin(prod);
    dispatch(cartLogoEffectAction(true));
  };

  const stockButtonHandle = () => {
    return stock > 0 ? '' : true;
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
        {stock < 1 && (
          <NoStockShadow>
            Sin stock{' '}
            {producto.type === 'vela' &&
              (size === 'medium' ? 'mediano' : size === 'big')}
          </NoStockShadow>
        )}
        <ProductImage src={producto.img} alt={producto.name} />
        <ProductTitle as="h3" fontSize="2xl">
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
