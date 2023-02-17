import React from 'react';
import styled, { css } from 'styled-components';

const BannerImageContainer = styled.div`
  @media screen and (min-width: 1080px) {
    width: 55%;
  }
  ${({ isMobile }) =>
    !isMobile
      ? css`
          width: 40%;
          min-width: 500px;
        `
      : css`
          width: 100%;
          min-width: unset;
        `}
`;

const BannerImage = ({ isMobile }) => {
  return (
    <BannerImageContainer className="fade-in-blur-second" isMobile={isMobile}>
      <img
        src="../assets/hero-foto.jpeg"
        alt="banner-hero"
        width="100%"
        height="100%"
      />
    </BannerImageContainer>
  );
};

export default BannerImage;
