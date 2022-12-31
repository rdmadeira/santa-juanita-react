import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo/Logo.jsx';
import { HeaderMenu } from './HeaderMenu.jsx';
import { Cart } from '../cartItems/CartLogo.jsx';
import { hiddenSignUpAction } from '../../redux/hiddenSignUp/hiddenSignUpAction';

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

const StyledLoginSignUp = styled.div`
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

const LogoutLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const CartLogo = styled(Cart)`
  position: fixed;
`;

const Header = ({ menu, setHiddenCart }) => {
  const user = useSelector((store) => store.user);
  const hiddenSignInUp = useSelector((store) => store.hiddenSignUp);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleHiddenSignInUpSection = () => {
    !user && dispatch(hiddenSignUpAction(!hiddenSignInUp));
    user && dispatch({ type: 'LOGOUT' }) && navigate('/');
  };

  return (
    <StyledHeader>
      <NavLink to={user ? `/users/${user.id}` : '/'}>
        <Logo></Logo>
      </NavLink>
      <StyledNav>
        <h1>Santa Juanita - Mimos al Alma</h1>
        <HeaderMenu menu={menu}></HeaderMenu>
      </StyledNav>
      <StyledLoginSignUp onClick={toggleHiddenSignInUpSection}>
        <span>{user?.name ? 'Hola, ' + user.name : 'Login / SignUp'}</span>
        {user && (
          <LogoutLogo
            src={
              process.env.PUBLIC_URL + '/assets/logout_logo/logout.svg'
            }></LogoutLogo>
        )}
      </StyledLoginSignUp>
      {user && <CartLogo user={user} setHiddenCart={setHiddenCart} />}
    </StyledHeader>
  );
};

export default Header;
