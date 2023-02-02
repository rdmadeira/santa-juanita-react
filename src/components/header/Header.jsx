import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo/Logo.jsx';
import { HeaderMenu } from './HeaderMenu.jsx';
import { CartLogo as Cart } from '../cartItems/CartLogo.jsx';
import {
  hiddenSignUpAction,
  toggleUserMenu,
} from '../../redux/hiddenSignUp/hiddenSignUpContactActions';
import { UserMenu } from './UserMenu.jsx';

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
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: var(--twilight-lavender);
  font-size: var(--step--1);
  /*   border-bottom: 1px solid var(--twilight-lavender);
 */
  margin: 0 2vw;
  cursor: pointer;
  padding: 10px 3px;
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
  const { signInUpHidden, userMenuHidden } = useSelector(
    (store) => store.hiddenComponents
  );
  const dispatch = useDispatch();

  const toggleHiddenSignInUpSection = () => {
    !user && dispatch(hiddenSignUpAction(!signInUpHidden));
    user && dispatch(toggleUserMenu());
  };

  return (
    <StyledHeader>
      <NavLink to="/">
        <Logo></Logo>
      </NavLink>
      <StyledNav>
        <h1>Santa Juanita - Mimos al Alma</h1>
        <HeaderMenu menu={menu}></HeaderMenu>
      </StyledNav>
      <StyledUserLogoDiv onClick={toggleHiddenSignInUpSection}>
        <span>{user?.name ? 'Hola, ' + user.name : 'Login / SignUp'}</span>
        {user && (
          <UserLogo
            src={process.env.PUBLIC_URL + '/assets/user_logo.png'}></UserLogo>
        )}
        {!userMenuHidden && <UserMenu />}
      </StyledUserLogoDiv>
      {user && <CartLogo setHiddenCart={setHiddenCart} />}
    </StyledHeader>
  );
};

export default Header;
