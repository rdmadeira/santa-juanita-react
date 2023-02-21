import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import BannerImage from './BannerImage.jsx';
import BannerText from './BannerText.jsx';
import { maxDeviceWidth } from '../../styles/media_queries/mediaQueries';

const BannerContainer = styled.section`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-height: 410px;
  border-bottom: var(--mulberry);
  border-bottom-style: solid;
  /* border-bottom-width: 12vh; */
  box-shadow: 0px 3px 25px #88446aa6;
  z-index: 1;
  overflow: hidden;
  @media ${maxDeviceWidth.tablet} {
    flex-flow: column nowrap;
    align-items: center;
  } ;
`;

const Banner = () => {
  const isMobile = useSelector((store) => store.hiddenComponents.navMenuHidden);
  return (
    <BannerContainer isMobile={isMobile}>
      <BannerImage isMobile={isMobile} />
      <BannerText isMobile={isMobile} />
    </BannerContainer>
  );
};

export default Banner;
