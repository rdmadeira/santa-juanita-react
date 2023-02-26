import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LinkContainer, SubmenuProductos } from './SubmenuProductos.jsx';
import './HeaderMenu.css';
import { useDisclosure } from '@chakra-ui/react';
import ContactDrawner from '../contact/ContactDrawner.jsx';

const StyledMenu = styled.ul`
  visibility: visible;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  column-gap: 10px;
  margin-top: 10px;
  ${({ hiddenMenu }) => {
    if (!hiddenMenu) {
      return css`
        visibility: visible;
        opacity: 1;
      `;
    } else {
      return css`
        visibility: hidden;
        opacity: 0;
      `;
    }
  }};

  ${({ hiddenMenu }) =>
    hiddenMenu &&
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

export const HeaderMenu = ({ menu, hidden }) => {
  const [showProductos, setshowProductos] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const disappearSubmenu = () => {
    setTimeout(() => setshowProductos(false), 300);
  };
  return (
    <StyledMenu hiddenMenu={hidden}>
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
      <LinkContainer onClick={onOpen}>
        <button>Contacto</button>
      </LinkContainer>
      <ContactDrawner isOpen={isOpen} onClose={onClose} />
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
