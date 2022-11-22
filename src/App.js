import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { AnimationStyles } from './styles/AnimationStyles';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background: #c99191b3;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AnimationStyles />
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
