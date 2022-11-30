import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { AnimationStyles } from './styles/AnimationStyles';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SignInUp from './components/sign-in-up/SignInUp';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background: #c99191b3;
`;

function App() {
  const [hiddenSignInUp, setHiddenSignInUp] = useState(undefined);

  return (
    <>
      <GlobalStyle />
      <AnimationStyles />
      <Header setHiddenSignInUp={setHiddenSignInUp} hidden={hiddenSignInUp} />
      <StyledMain>
        <SignInUp hidden={hiddenSignInUp} />
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
