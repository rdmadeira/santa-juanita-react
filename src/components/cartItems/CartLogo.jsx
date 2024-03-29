import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as hiddenCartActions from '../../redux/hiddenSignUp/hiddenSignUpContactActions';

import './cart_logo_effect.css';

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
  min-width: 60px;
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

export const CartLogo = ({ cartEffect }) => {
  const myCart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <CartContainer
      onClick={() => dispatch(hiddenCartActions.toggleCart())}
      className={cartEffect ? 'logo_effect' : ''}>
      <CartImg
        src={process.env.PUBLIC_URL + '/assets/shopping-cart-icon.png'}
        alt="cart-icon"
      />
      <CartNumber>{myCart?.length || 0}</CartNumber>
    </CartContainer>
  );
};
