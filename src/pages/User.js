import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { AnimationStyles } from '../styles/AnimationStyles';
import Header from '../components/header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer.jsx';
import { useSelector } from 'react-redux';
import MyCart from '../components/cartItems/CartItems.jsx';

const User = () => {
  const user = useSelector((store) => store.user);
  return (
    <>
      <GlobalStyle />
      <AnimationStyles />
      <Header
        menu={[
          { name: 'Home', linkTo: `/users/${user.id}` },
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
      <div>
        <MyCart />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default User;
