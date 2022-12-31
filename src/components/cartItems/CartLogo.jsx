import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CartContainer = styled.div`
  width: 8%;
  background: var(--snow);
  opacity: 0.7;
  border-radius: 50%;
  align-self: center;
  position: fixed;
  transition: 0.6s ease all;
  bottom: 20px;
  right: 20px;
  z-index: 3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const CartImg = styled.img`
  width: 100%;
`;

const CartNumber = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 15px;
  color: var(--snow);
  background-color: var(--pink-lavender);
  border-radius: 50%;
  padding: 0 5px;
  border: 1px solid var(--snow);
`;

export const Cart = ({ setHiddenCart }) => {
  const myCart = useSelector((store) => store.cart);
  return (
    <CartContainer onClick={() => setHiddenCart(false)}>
      <CartImg
        src={process.env.PUBLIC_URL + '/assets/shopping-cart-icon.png'}
        alt="cart-icon"
      />
      <CartNumber>{myCart?.length || 0}</CartNumber>
    </CartContainer>
  );
};
