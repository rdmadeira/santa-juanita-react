import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { GlobalStyle } from './styles/GlobalStyle';
import { AnimationStyles } from './styles/AnimationStyles';
import { getProducts } from './redux/productos/productosActions';
// import Header from './components/header/Header.jsx';
import Home from './pages/Home';
import Products from './pages/Products';
import Velas from './pages/Velas';
import Sales from './pages/Sales';
import Bombas from './pages/Bombas';
import Difusores from './pages/Difusores';
import Galeria from './pages/Galeria';
import Orders from './pages/Orders';

/* import User from './pages/User';
import Payment from './pages/Payment'; */
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
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

  /* {
        path: 'users/:id',
        element: <User />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'productos',
            element: <Products />,
          },
          {
            element: <Velas />,
            path: 'velas',
          },
          {
            element: <Sales />,
            path: 'sales',
          },
          {
            element: <Difusores />,
            path: 'difusores',
          },
          {
            element: <Bombas />,
            path: 'bombas',
          },
          {
            element: <Payment />,
            path: 'payment',
          },
        ],
      }, */
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <GlobalStyle />
      <AnimationStyles />
      <Outlet />
    </>
  );
}

export default App;
