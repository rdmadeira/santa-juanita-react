import React, { useState } from 'react';
import styled from 'styled-components';
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
        {showProductos === true ? <SubmenuProductos></SubmenuProductos> : ''}
      </LinkContainer>
      <LinkContainer>
        <NavLink to="/gallery">Galeria</NavLink>
      </LinkContainer>
      <LinkContainer
        style={{ padding: '7px 15px 7px 15px', cursor: 'pointer' }}>
        Contacto
      </LinkContainer>
    </StyledMenu>
  );
};
