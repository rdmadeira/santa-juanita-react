import React from 'react';
import styled from 'styled-components';
import BannerImage from './BannerImage.jsx';
import BannerText from './BannerText.jsx';

const BannerContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-height: 410px;
  border-bottom: var(--mulberry);
  border-bottom-style: solid;
  border-bottom-width: 12vh;
  box-shadow: 0px 3px 25px #88446aa6;
  z-index: 1;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage />
      <BannerText />
    </BannerContainer>
  );
};

export default Banner;
