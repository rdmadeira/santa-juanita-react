import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import SectionButton from './SectionButton.jsx';

const StyledSection = styled.section`
  width: 50%;
  display: flex;
  height: 530px;
  border: 1px solid var(--mulberry);
  box-shadow: 0px 3px 25px #88446aa6;
  @media screen and (min-width: 521px) and (max-width: 1080px) and (orientation: portrait) {
    width: 100%;
  }
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 100%;
    `}
`;

const SectionImageContainer = styled.div`
  width: 100%;
  z-index: 0;
  position: relative;
  border-bottom: 10px solid var(--lavender-blush);
`;

const SectionTextContainer = styled.div`
  color: var(--snow);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2vw;
  row-gap: 2vw;
  width: 50%;
  position: absolute;
  z-index: 1;
  background-color: #88446a4d;
  height: 530px;
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 100%;
      row-gap: 10%;
      height: 50%;
      background-color: #f0f8ffab;
      align-self: center;
      padding: 30px 10px;
      color: var(--twilight-lavender);
    `}
`;

const H2 = styled.h2`
  font-size: var(--step-1);
  ${({ isMobile }) =>
    isMobile &&
    css`
      font-size: var(--step-3);
    `}
`;

const P = styled.p`
  font-size: var(--step-0);
  ${({ isMobile }) =>
    isMobile &&
    css`
      font-size: var(--step-2);
    `}
`;

const SectionCard = ({ imageUrl, altname, h2Text, pText, href }) => {
  const isMobile = useSelector((store) => store.hiddenComponents.navMenuHidden);

  return (
    <StyledSection isMobile={isMobile}>
      <SectionTextContainer className="fade-in-blur-third" isMobile={isMobile}>
        <H2 className="shake-2" isMobile={isMobile}>
          {h2Text}
        </H2>
        <P isMobile={isMobile}>{pText}</P>
        <SectionButton href={href} isMobile={isMobile} />
      </SectionTextContainer>
      <SectionImageContainer className="fade-in-blur-second">
        <img
          src={imageUrl}
          alt={altname}
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
        />
      </SectionImageContainer>
    </StyledSection>
  );
};

export default SectionCard;
