import React from 'react';
import styled from 'styled-components';
// import LogoImg from '../../assets/logo.png';

const LogoDiv = styled.div`
  width: ${({ w }) => (w ? w : 'min(20vw, 114px)')};
  margin-left: 20px;
  /* min-width: 127px; */
  transition: 0.5s ease all;
`;

const Logo = ({ w }) => {
  return (
    <LogoDiv w={w}>
      <img
        src={process.env.PUBLIC_URL + '/assets/logo.png'}
        alt="logo-of-santa-juanita"
        width="100%"
        height="auto"
      />
    </LogoDiv>
  );
};

export default Logo;
