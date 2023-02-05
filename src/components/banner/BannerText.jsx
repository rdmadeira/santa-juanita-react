import React from 'react';
import styled, { css } from 'styled-components';

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: flex-end;
  text-align: end;
  font-family: 'Barlow', sans-serif;
  color: var(--opera-mauve);
  row-gap: 1vw;
  padding: 0 4vw 3vw 6vw;
  background: linear-gradient(
    343deg,
    #d199b8 0%,
    #cb9bb6 34%,
    #d3b3c3 57%,
    #e7cada 100%
  );
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 100%;
    `}
`;

const TextContainer = styled.div`
  background: #f3e8ee54;
  position: absolute;
  width: 50vw;
  right: 0px;
  padding: 0 2vw 0 30px;
  color: var(--twilight-lavender);
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 100%;
      position: relative;
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
      font-size: var(--step-1);
    `}
`;

const BannerText = ({ isMobile }) => {
  return (
    <BannerTextContainer className="fade-in-blur-third" isMobile={isMobile}>
      <TextContainer isMobile={isMobile}>
        <H2 isMobile={isMobile}>
          Productos Artesanales Aromáticos y Energéticos
        </H2>
        <P isMobile={isMobile}>
          Elaborados pensando en su bien estar mental y espiritual.
        </P>
      </TextContainer>
    </BannerTextContainer>
  );
};

export default BannerText;
