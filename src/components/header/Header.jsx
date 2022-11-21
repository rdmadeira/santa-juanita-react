import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo.jsx';
import { HeaderMenu } from './HeaderMenu.jsx';

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
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  justify-content: end;
  align-items: center;
  background: var(--lavender-blush);
  padding: 0vw 2vw 0vw 2vw;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo></Logo>
      <StyledNav>
        <h1>Santa Juanita - Mimos al Alma</h1>
        <HeaderMenu></HeaderMenu>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
