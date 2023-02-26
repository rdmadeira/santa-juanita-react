import React /* , { useState } */ from 'react';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignInUp from '../components/sign-in-up/SignInUp';
import MyCartItems from '../components/cartItems/CartItems.jsx';
import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background: #c99191b3;
`;

const Index = () => {
  const { signInUpHidden, cartHidden } = useSelector(
    (store) => store.hiddenComponents
  );

  const user = useSelector((store) => store.user);
  return (
    <>
      <Header
        /* setHiddenSignInUp={setHiddenSignInUp}
        hidden={hiddenSignInUp} */
        menu={[
          { name: 'Home', linkTo: '/' },
          {
            name: 'Productos',
            linkTo: '/productos',
            children: [
              { name: 'Velas', linkTo: '/velas' },
              { name: 'Difusores', linkTo: '/difusores' },
              { name: 'Sales de baño', linkTo: '/sales' },
              { name: 'Bombas efervecentes', linkTo: '/bombas' },
            ],
          },
          { name: 'Galeria', linkTo: '/galeria' },
          /* { name: 'Contacto', linkTo: '/contacto' }, */
        ]}
      />

      <StyledMain user={user}>
        {!user && <SignInUp signInUpHidden={signInUpHidden} />}
        {!cartHidden && <MyCartItems />}
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Index;
