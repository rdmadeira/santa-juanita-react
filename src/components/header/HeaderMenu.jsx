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

export const HeaderMenu = ({ menu }) => {
  const [showProductos, setshowProductos] = useState(false);

  const disappearSubmenu = () => {
    setTimeout(() => setshowProductos(false), 300);
  };
  return (
    <StyledMenu>
      {menu.map((li) => {
        if (li.children) {
          return (
            <LinkContainer
              key={Math.random().toString()}
              style={{ position: 'relative' }}
              onMouseOver={() => setshowProductos(true)}
              onMouseLeave={disappearSubmenu}>
              <NavLink relative="route" to={li.linkTo}>
                {li.name}
              </NavLink>
              {showProductos === true ? (
                <SubmenuProductos submenu={li.children}></SubmenuProductos>
              ) : (
                ''
              )}
            </LinkContainer>
          );
        } else {
          return (
            <LinkContainer key={li.name}>
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
