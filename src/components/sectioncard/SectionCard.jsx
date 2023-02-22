import React from 'react';
import styled, { css } from 'styled-components';
import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import SectionButton from './SectionButton.jsx';

const StyledSection = styled.section`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  width: 50%;
  display: flex;
  height: 500px;
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

const SectionTextContainer = styled.div`
  color: var(--snow);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2vw;
  row-gap: 2vw;
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: #88446a4d;
  height: 500px;
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 100%;
      row-gap: 10vw;
      height: 50%;
      height: unset;
      align-self: center;
      padding: 30px 10px;

      /* color: var(--twilight-lavender); */
    `}
`;

/* const H2 = styled.h2`
  font-size: var(--step-1);
  ${({ isMobile }) =>
    isMobile &&
    css`
      font-size: var(--step-3);
    `}
`; */

/* const P = styled.p`
  font-size: var(--step-0);
  ${({ isMobile }) =>
    isMobile &&
    css`
      font-size: var(--step-3);
    `}
`; */

const SectionCard = ({ imageUrl, h2Text, pText, href }) => {
  const isMobile = useSelector((store) => store.hiddenComponents.navMenuHidden);

  return (
    <StyledSection
      isMobile={isMobile}
      src={imageUrl}
      className="fade-in-blur-second">
      <SectionTextContainer className="fade-in-blur-third" isMobile={isMobile}>
        <Text
          as="h2"
          className="shake-2"
          fontSize={isMobile ? 'var(--step-3)' : 'var(--step-2)'}>
          {h2Text}
        </Text>
        <Text as="p" fontSize={isMobile ? 'var(--step-2)' : 'var(--step-1'}>
          {pText}
        </Text>
        <SectionButton href={href} isMobile={isMobile} />
      </SectionTextContainer>
    </StyledSection>
  );
};

export default SectionCard;
