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
import User from './pages/User';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Index from './pages/Index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
            path: '/gallery',
          },
        ],
      },
      {
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
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <AnimationStyles />
      <Outlet />
    </>
  );
}

export default App;
