import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '../logo/Logo.jsx';
import { HeaderMenu } from './HeaderMenu.jsx';
import { CartLogo as Cart } from '../cartItems/CartLogo.jsx';
import MenuLogo from './MenuLogo.jsx';
import {
  hiddenSignUpAction,
  toggleUserMenu,
  cartLogoEffectAction,
  navMenuHiddenAction,
} from '../../redux/hiddenSignUp/hiddenSignUpContactActions';
import { UserMenu } from './UserMenu.jsx';
import {
  device,
  maxDeviceWidth,
} from '../../styles/media_queries/mediaQueries';

const StyledHeader = styled.header`
  width: 100%;
  background: var(--lavender-blush);
  border-bottom: solid 30px var(--mulberry);
  transition: 0.5s ease all;
  position: relative;
  z-index: 12;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--opera-mauve);
  ${({ navMenuHidden, hidden }) =>
    navMenuHidden &&
    !hidden &&
    css`
      justify-content: center;
    `}
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: var(--lavender-blush);
  padding: 0vw 2vw 0vw 2vw;
`;

const StyledUserLogoDiv = styled.div`
  position: absolute;
  z-index: 12;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: var(--twilight-lavender);
  font-size: var(--step--1);
  border: 1px solid var(--opera-mauve);
  border-radius: 10px;
  cursor: pointer;
  padding: 3px;

  &:hover {
    background-color: #ebd9e3;
  }
`;

const UserLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const CartLogo = styled(Cart)`
  position: fixed;
`;

const Header = ({ menu, setHiddenCart }) => {
  const user = useSelector((store) => store.user);

  const [showMobileMenu, setshowMobileMenu] = useState(false);

  const [inOut, setInOut] = useState(false);

  const { signInUpHidden, userMenuHidden, cartEffect, navMenuHidden } =
    useSelector((store) => store.hiddenComponents);
  const dispatch = useDispatch();

  useEffect(() => {
    cartEffect && setTimeout(() => dispatch(cartLogoEffectAction(false)), 1000);
    window.addEventListener('resize', () => {
      window.matchMedia(maxDeviceWidth.mobileL).matches &&
        dispatch(navMenuHiddenAction(maxDeviceWidth.mobileL));
      window.matchMedia(device.mobileL).matches &&
        dispatch(navMenuHiddenAction(device.mobileL));
    });
  }, [
    cartEffect,
    matchMedia(maxDeviceWidth.mobileL).matches,
    matchMedia(device.mobileL).matches,
  ]);

  const toggleHiddenSignInUpSection = () => {
    !user && dispatch(hiddenSignUpAction(!signInUpHidden));
    if (user) {
      if (!userMenuHidden) {
        setInOut(!inOut);
        setTimeout(() => dispatch(toggleUserMenu(!userMenuHidden)), 900);
      } else {
        setInOut(!inOut);
        dispatch(toggleUserMenu(!userMenuHidden));
      }
    }
  };

  return (
    <StyledHeader navMenuHidden={navMenuHidden}>
      <NavLink to="/">
        <Logo></Logo>
      </NavLink>
      {navMenuHidden && (
        <MenuLogo
          showMobileMenu={showMobileMenu}
          setshowMobileMenu={setshowMobileMenu}
        />
      )}
      <StyledNav>
        <h1>Santa Juanita - Mimos al Alma</h1>
        <HeaderMenu
          menu={menu}
          hidden={navMenuHidden}
          showMobileMenu={showMobileMenu}></HeaderMenu>
      </StyledNav>
      <StyledUserLogoDiv onClick={toggleHiddenSignInUpSection}>
        <span>{user?.name ? 'Hola, ' + user.name : 'Login / SignUp'}</span>
        {user && (
          <UserLogo
            src={process.env.PUBLIC_URL + '/assets/user_logo.png'}></UserLogo>
        )}
        {!userMenuHidden && <UserMenu hidden={inOut} />}
      </StyledUserLogoDiv>
      {user && (
        <CartLogo setHiddenCart={setHiddenCart} cartEffect={cartEffect} />
      )}
    </StyledHeader>
  );
};

export default Header;
