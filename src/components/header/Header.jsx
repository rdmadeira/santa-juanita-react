import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo/Logo.jsx';
import { HeaderMenu } from './HeaderMenu.jsx';

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
  column-gap: 1vw;
  color: var(--twilight-lavender);
  font-size: var(--step--1);
  border-bottom: 1px solid var(--twilight-lavender);
  margin: 0 2vw;
  cursor: pointer;
`;

const Header = ({ hidden, setHiddenSignInUp, menu }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const toggleHiddenSignInUpSection = () => {
    !user && setHiddenSignInUp(!hidden);
    user && navigate('/user');
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
      <StyledLoginSignUp onClick={toggleHiddenSignInUpSection}>
        <span>{user?.name ? 'Hola, ' + user.name : 'Login / SignUp'}</span>
      </StyledLoginSignUp>
    </StyledHeader>
  );
};

export default Header;
