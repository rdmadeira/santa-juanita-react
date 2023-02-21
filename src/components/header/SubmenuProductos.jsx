import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledSubmenuProductos = styled.ul`
  position: absolute;
  background-color: var(--lavender-blush);
  top: 35px;
  left: -30;
  z-index: 5;
  padding: 5px 0 5px 0;
  width: max-content;
  ${({ showMobileMenu }) =>
    showMobileMenu &&
    css`
      width: 100vw;
      display: flex;
      flex-direction: column;
      row-gap: 5vh;
    `}
`;

export const LinkContainer = styled.li`
  font-weight: 300;
  display: flex;
  color: var(--opera-mauve);
  font-size: var(--step--1);
  border-bottom: 0.5px solid rgba(183, 183, 183, 0.507);
  padding: 2px 3px;
  &:hover {
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    background: var(--opera-mauve);
    color: var(--snow);
  }
  ${({ showMobileMenu }) =>
    showMobileMenu &&
    css`
      width: 100%;
      justify-content: center;
      font-size: 40px;
    `}
`;

export const SubmenuProductos = ({ submenu, showMobileMenu }) => {
  return (
    <StyledSubmenuProductos showMobileMenu={showMobileMenu}>
      {submenu.map((li) => {
        return (
          <LinkContainer key={li.name} showMobileMenu={showMobileMenu}>
            <NavLink relative="route" to={li.linkTo}>
              {li.name}
            </NavLink>
          </LinkContainer>
        );
      })}
    </StyledSubmenuProductos>
  );
};
