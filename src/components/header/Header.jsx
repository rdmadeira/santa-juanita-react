import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo.jsx';
import { HeaderMenu } from './HeaderMenu.jsx';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100%;
  background: var(--lavender-blush);
  border-bottom: solid 30px var(--mulberry);
  transition: 0.5s ease all;
  position: relative;
  z-index: 2;
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
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  column-gap: 1vw;
  color: var(--twilight-lavender);
  font-size: var(--step--1);
  border-bottom: 1px solid var(--twilight-lavender);
  margin: 0 2vw;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo></Logo>
      <StyledNav>
        <h1>Santa Juanita - Mimos al Alma</h1>
        <HeaderMenu></HeaderMenu>
      </StyledNav>
      <StyledLoginSignUp>
        <Link to="/signinup">Login / SignUp</Link>
      </StyledLoginSignUp>
    </StyledHeader>
  );
};

export default Header;
