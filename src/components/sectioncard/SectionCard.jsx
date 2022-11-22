import React from 'react';
import styled from 'styled-components';
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
`;

const SectionImageContainer = styled.div`
  width: 100%;
  z-index: 0;
  position: relative;
`;

const SectionTextContainer = styled.div`
  color: var(--snow);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2vw;
  row-gap: 2vw;
  width: 20%;
  position: absolute;
  z-index: 1;
  background-color: #88446a4d;
  height: 530px;
`;

const H2 = styled.h2`
  font-size: var(--step-1);
`;

const P = styled.p`
  font-size: var(--step-0);
`;

const SectionCard = ({ imageUrl, altname, h2Text, pText, href }) => {
  return (
    <StyledSection>
      <SectionTextContainer className="fade-in-blur-third">
        <H2 className="shake-2">{h2Text}</H2>
        <P>{pText}</P>
        <SectionButton href={href} />
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
