import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSubmenuProductos = styled.ul`
  position: absolute;
  background-color: var(--lavender-blush);
  top: 35px;
  left: -30;
  z-index: 5;
  padding: 5px 0 5px 0;
  width: max-content;
`;

export const LinkContainer = styled.li`
  font-weight: 300;
  display: flex;
  color: var(--opera-mauve);
  font-size: var(--step-0);
  border-bottom: 0.5px solid rgba(183, 183, 183, 0.507);
  &:hover {
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    background: var(--opera-mauve);
    color: var(--snow);
  }
`;

export const SubmenuProductos = ({ submenu }) => {
  return (
    <StyledSubmenuProductos>
      {submenu.map((li) => {
        return (
          <LinkContainer key={li.name}>
            <NavLink relative="route" to={li.linkTo}>
              {li.name}
            </NavLink>
          </LinkContainer>
        );
      })}
    </StyledSubmenuProductos>
  );
};
