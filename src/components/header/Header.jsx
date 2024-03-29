import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '../logo/Logo.jsx';
import { HeaderMenu } from './HeaderMenu.jsx';
import { CartLogo as Cart } from '../cartItems/CartLogo.jsx';
/* import MenuLogo from './MenuLogo.jsx'; */
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
import { Heading, Flex } from '@chakra-ui/react';
import ChakraMenu from './ChakraMenu.jsx';

const StyledHeader = styled.header`
  width: 100%;
  background: var(--lavender-blush);
  border-bottom: solid 30px var(--mulberry);
  transition: 0.5s ease all;
  position: relative;
  z-index: 12;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  color: var(--opera-mauve);
  align-items: center;
  ${({ navMenuHidden }) =>
    navMenuHidden &&
    css`
      justify-content: center;
      align-items: center;
      flex-direction: column;
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
  position: relative;
  z-index: 12;
  top: 0;
  right: 5px;
  display: flex;
  align-items: center;
  align-self: end;
  column-gap: 10px;
  color: var(--twilight-lavender);
  font-size: medium;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 8px;
  &:hover {
    background-color: #ebd9e3;
  }
  ${({ navMenuHidden }) =>
    navMenuHidden &&
    css`
      position: absolute;
    `}
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

  /* const [showMobileMenu, setshowMobileMenu] = useState(false); */

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
    window.matchMedia(device.mobileL).matches &&
      dispatch(navMenuHiddenAction(device.mobileL));
    window.matchMedia(maxDeviceWidth.mobileL).matches &&
      dispatch(navMenuHiddenAction(maxDeviceWidth.mobileL));
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
        <Logo />
      </NavLink>
      <Flex flexDir="column">
        <StyledUserLogoDiv
          onClick={toggleHiddenSignInUpSection}
          navMenuHidden={navMenuHidden}>
          {!navMenuHidden && (
            <span>
              {user?.displayName
                ? 'Hola, ' + user.displayName
                : user?.email
                ? user.email
                : 'Login / SignUp'}
            </span>
          )}

          <UserLogo
            src={process.env.PUBLIC_URL + '/assets/user_logo.png'}></UserLogo>

          {!userMenuHidden && <UserMenu hiddenMenu={inOut} />}
        </StyledUserLogoDiv>
        {navMenuHidden ? (
          <>
            {/* <MenuLogo
            showMobileMenu={showMobileMenu}
            setshowMobileMenu={setshowMobileMenu}
          /> */}
            <Heading as="h1" /* size={'lg'} */ textAlign="center" fontSize="h1">
              Santa Juanita - Mimos al Alma
            </Heading>
            <ChakraMenu menu={menu} />
          </>
        ) : (
          <StyledNav>
            <Heading as="h1" size={'lg'} textAlign="center">
              Santa Juanita - Mimos al Alma
            </Heading>
            <HeaderMenu menu={menu} hiddenMenu={navMenuHidden}></HeaderMenu>
          </StyledNav>
        )}

        {user && (
          <CartLogo setHiddenCart={setHiddenCart} cartEffect={cartEffect} />
        )}
      </Flex>
    </StyledHeader>
  );
};

export default Header;
