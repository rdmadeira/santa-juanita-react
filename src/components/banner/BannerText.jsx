import React from 'react';
// import styled, { css } from 'styled-components';
import { Box, Text, Container } from '@chakra-ui/react';
import styled from '@emotion/styled';

const BannerTextWrapper = styled(Container)((props) => ({
  width: props.ismobile ? '100%' : '50%',
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  textAlign: 'end',
  position: 'absolute',
  bottom: '0',
  right: '0',
  backgroundColor: '#ebd9e378',
  paddingLeft: '2em',
}));

const TextBox = styled(Box)((props) => {
  props.ismobile && {
    width: '100%',
  };
});

const BannerText = ({ isMobile }) => {
  return (
    <BannerTextWrapper
      className="fade-in-blur-third"
      ismobile={isMobile ? 1 : 0}>
      <TextBox ismobile={isMobile ? 1 : 0}>
        <Text
          as="h2"
          /* isMobile={isMobile} */
          fontSize={isMobile ? 'var(--step-3)' : 'var(--step-1)'}
          fontWeight="bold">
          Productos Artesanales Aromáticos y Energéticos
        </Text>
        <Text
          as="p"
          /* isMobile={isMobile} */ fontSize={
            isMobile ? 'var(--step-1)' : 'var(--step-0)'
          }>
          Elaborados pensando en su bien estar mental y espiritual.
        </Text>
      </TextBox>
    </BannerTextWrapper>
  );
};

export default BannerText;
