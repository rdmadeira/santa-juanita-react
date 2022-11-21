import React from 'react';
import styled from 'styled-components';
// import LogoImg from '../../assets/logo.png';

const LogoDiv = styled.div`
  width: min(20vw, 114px);
  margin-left: 20px;
  /* min-width: 127px; */
  transition: 0.5s ease all;
`;

const Logo = () => {
  return (
    <LogoDiv>
      <img
        src="./assets/logo.png"
        alt="logo-of-santa-juanita"
        width="100%"
        height="auto"
      />
    </LogoDiv>
  );
};

export default Logo;
