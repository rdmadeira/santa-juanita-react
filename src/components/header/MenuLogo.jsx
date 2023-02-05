import React from 'react';
import styled from 'styled-components';

const MenuLogoContainer = styled.div`
  position: absolute;
  width: 12%;
  top: 10px;
  left: 10px;
  z-index: 3;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid var(--twilight-lavender);
`;

const MenuLogoImg = styled.img`
  width: 100%;
  height: auto;
`;

const MenuLogo = ({ showMobileMenu, setshowMobileMenu }) => {
  return (
    <MenuLogoContainer onClick={() => setshowMobileMenu(!showMobileMenu)}>
      <MenuLogoImg src="./assets/menu-vertical.png" />
    </MenuLogoContainer>
  );
};

export default MenuLogo;
