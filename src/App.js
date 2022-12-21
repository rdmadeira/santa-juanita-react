import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { AnimationStyles } from './styles/AnimationStyles';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/Home';
import Products from './pages/Products';
import Velas from './pages/Velas';
import Sales from './pages/Sales';
import Bombas from './pages/Bombas';
import Difusores from './pages/Difusores';
import Galeria from './pages/Galeria';
import User from './pages/User';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import SignInUp from './components/sign-in-up/SignInUp';
import { useSelector } from 'react-redux';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background: #c99191b3;
`;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        element: <Velas />,
        path: '/velas',
      },
      {
        element: <Sales />,
        path: '/sales',
      },
      {
        element: <Difusores />,
        path: '/difusores',
      },
      {
        element: <Bombas />,
        path: '/bombas',
      },
      {
        element: <Galeria />,
        path: '/gallery',
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
]);
function App() {
  const [hiddenSignInUp, setHiddenSignInUp] = useState(undefined);
  const user = useSelector((store) => store.user);

  return (
    <>
      <GlobalStyle />
      <AnimationStyles />
      <Header setHiddenSignInUp={setHiddenSignInUp} hidden={hiddenSignInUp} />
      <StyledMain user={user}>
        <SignInUp hidden={hiddenSignInUp} setHidden={setHiddenSignInUp} />
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
