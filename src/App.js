import React, { useEffect } from 'react';
import { useDispatch /* , useSelector */ } from 'react-redux/es/exports';
import { GlobalStyle } from './styles/GlobalStyle';
import { AnimationStyles } from './styles/AnimationStyles';
import { sendProductsToStore } from './redux/productos/productosActions';
import { sendStockToStore } from './redux/stock/stockActions';
import { setUser } from './redux/user/userActions';
import { sendUsersToStore } from './redux/users/usersActions';

import Home from './pages/Home';
import Products from './pages/Products';
import Velas from './pages/Velas';
import Sales from './pages/Sales';
import Bombas from './pages/Bombas';
import Difusores from './pages/Difusores';
import Galeria from './pages/Galeria';
import Orders from './pages/Orders';

import { createBrowserRouter, Outlet, useLoaderData } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';
import {
  getProductsFromDataBase,
  getStockFromDataBase,
  getUsersFromDatabase,
} from './firebase/firebase_utils';
import {
  onAuthStateChange,
  checkIsSignInWithEmail,
} from './firebase/firebase_auth/auth_utils';
/* import { checkUser } from './utils/form_utils/formVerifyUser'; */

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    loader: async () => {
      const productos = await getProductsFromDataBase();
      const stock = await getStockFromDataBase();
      const users = await getUsersFromDatabase();
      return { productos, stock, users };
    },
    children: [
      {
        element: <Index />,
        path: '/',
        children: [
          {
            element: <Home />,
            index: true,
          },
          {
            path: '/productos',
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
            path: '/galeria',
          },
          {
            element: <Contact />,
            path: '/contacto',
          },
          {
            path: '/orders',
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const { productos, stock, users } = useLoaderData();
  /*   const stock = useSelector((store) => store.stock);
   */
  useEffect(() => {
    productos && dispatch(sendProductsToStore(productos));
    stock && dispatch(sendStockToStore(stock));
    users && dispatch(sendUsersToStore(users));
  }, [dispatch, productos, stock, users]);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(dispatch, setUser);
    checkIsSignInWithEmail();
    return () => {
      unsubscribe();
    };
  }, [dispatch, setUser]);

  return (
    <>
      <GlobalStyle />
      <AnimationStyles />
      <Outlet />
    </>
  );
}

export default App;
