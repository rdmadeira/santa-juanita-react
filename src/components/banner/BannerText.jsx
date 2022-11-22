import React from 'react';
import styled from 'styled-components';

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
`;

const TextContainer = styled.div`
  background: #f3e8ee54;
  position: absolute;
  width: 50vw;
  right: 0px;
  padding: 0 2vw 0 30px;
  color: var(--twilight-lavender);
`;

const H2 = styled.h2`
  font-size: var(--step-1);
`;

const P = styled.p`
  font-size: var(--step-0);
`;

const BannerText = () => {
  return (
    <BannerTextContainer className="fade-in-blur-third">
      <TextContainer>
        <H2>Productos Artesanales Aromáticos y Energéticos</H2>
        <P>Elaborados pensando en su bien estar mental y espiritual.</P>
      </TextContainer>
    </BannerTextContainer>
  );
};

export default BannerText;
