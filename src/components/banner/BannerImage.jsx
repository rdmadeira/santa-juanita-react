import React from 'react';
import styled from 'styled-components';

const BannerImageContainer = styled.div`
  width: 40%;
  min-width: 410px;
  @media screen and (min-width: 1080px) {
    width: 55%;
  }
`;

const BannerImage = () => {
  return (
    <BannerImageContainer className="fade-in-blur-second">
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
