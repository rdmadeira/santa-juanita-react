import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { AnimationStyles } from '../styles/AnimationStyles';
import Header from '../components/header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer.jsx';

const User = () => {
  return (
    <>
      <GlobalStyle />
      <AnimationStyles />
      <Header
        menu={[
          { name: 'Home', linkTo: '/user' },
          {
            name: 'Productos',
            linkTo: 'productos',
            children: [
              { name: 'Velas', linkTo: 'velas' },
              { name: 'Difusores', linkTo: 'difusores' },
              { name: 'Sales de baño', linkTo: 'sales' },
              { name: 'Bombas efervecentes', linkTo: 'bombas' },
            ],
          },
          { name: 'Galeria', linkTo: 'galeria' },
          { name: 'Contacto', linkTo: 'contacto' },
        ]}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default User;
