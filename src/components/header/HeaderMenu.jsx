import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './HeaderMenu.css';

const StyledMenu = styled.ul`
  visibility: visible;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  column-gap: 10px;
  margin-top: 10px;
`;

const LinkContainer = styled.li`
  font-weight: 300;
  display: flex;
  color: var(--opera-mauve);
  font-size: var(--step-0);
  &:hover {
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    background: var(--opera-mauve);
    color: var(--snow);
  }
`;

const SubmenuProductos = styled.ul`
  position: absolute;
  top: 30px;
  z-index: 5;
  padding-top: 30px;
`;

export const HeaderMenu = () => {
  const [showProductos, setshowProductos] = useState(false);

  const disappearSubmenu = () => {
    setTimeout(() => setshowProductos(false), 300);
  };
  return (
    <StyledMenu>
      <LinkContainer>
        <NavLink to="/">Home</NavLink>
      </LinkContainer>
      <LinkContainer
        style={{ position: 'relative' }}
        onMouseOver={() => setshowProductos(true)}
        onMouseLeave={disappearSubmenu}>
        <NavLink to="/products">Productos</NavLink>
        {showProductos === true ? (
          <SubmenuProductos>
            <LinkContainer>
              <NavLink to="/velas">Velas</NavLink>
            </LinkContainer>
            <LinkContainer>
              <NavLink to="/difusores">Difusores</NavLink>
            </LinkContainer>
            <LinkContainer>
              <NavLink to="/sales">Sales de baño</NavLink>
            </LinkContainer>
            <LinkContainer>
              <NavLink to="/bombas">Bombas Efervecentes</NavLink>
            </LinkContainer>
          </SubmenuProductos>
        ) : (
          ''
        )}
      </LinkContainer>
      <LinkContainer>
        <NavLink to="/gallery">Galeria</NavLink>
      </LinkContainer>
      <LinkContainer>
        <NavLink to="/contact">Contacto</NavLink>
      </LinkContainer>
    </StyledMenu>
  );
};
