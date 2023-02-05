import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LinkContainer, SubmenuProductos } from './SubmenuProductos.jsx';
import './HeaderMenu.css';

const StyledMenu = styled.ul`
  visibility: visible;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  column-gap: 10px;
  margin-top: 10px;
  ${({ showMobileMenu }) =>
    showMobileMenu
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          oppacity: 0;
        `}

  ${({ hidden }) =>
    hidden &&
    css`
      position: absolute;
      top: 60px;
      left: 10px;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 5vh;
      background-color: var(--queen-pink);
      z-index: 10;
      height: 100vh;
    `}
`;

export const HeaderMenu = ({ menu, hidden, showMobileMenu }) => {
  const [showProductos, setshowProductos] = useState(false);

  const disappearSubmenu = () => {
    setTimeout(() => setshowProductos(false), 300);
  };
  return (
    <StyledMenu hidden={hidden} showMobileMenu={showMobileMenu}>
      {menu.map((li) => {
        if (li.children) {
          return (
            <LinkContainer
              key={Math.random().toString()}
              style={{ position: 'relative' }}
              onMouseOver={() => setshowProductos(true)}
              onMouseLeave={disappearSubmenu}
              showMobileMenu={showMobileMenu}>
              <NavLink relative="route" to={li.linkTo}>
                {li.name}
              </NavLink>
              {showProductos === true ? (
                <SubmenuProductos
                  submenu={li.children}
                  showMobileMenu={showMobileMenu}></SubmenuProductos>
              ) : (
                ''
              )}
            </LinkContainer>
          );
        } else {
          return (
            <LinkContainer key={li.name} showMobileMenu={showMobileMenu}>
              <NavLink to={li.linkTo}>{li.name}</NavLink>
            </LinkContainer>
          );
        }
      })}

      {/* <LinkContainer>
        <NavLink to="/">Home</NavLink>
      </LinkContainer>
      <LinkContainer
        style={{ position: 'relative' }}
        onMouseOver={() => setshowProductos(true)}
        onMouseLeave={disappearSubmenu}>
        <NavLink to="/products">Productos</NavLink>
        {showProductos === true ? <SubmenuProductos></SubmenuProductos> : ''}
      </LinkContainer>
      <LinkContainer>
        <NavLink to="/gallery">Galeria</NavLink>
      </LinkContainer>
      <LinkContainer
        style={{ padding: '7px 15px 7px 15px', cursor: 'pointer' }}>
        Contacto
      </LinkContainer> */}
    </StyledMenu>
  );
};
