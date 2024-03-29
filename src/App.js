import React, { useEffect } from 'react';
import { useDispatch /* , useSelector */ } from 'react-redux/es/exports';
import { GlobalStyle } from './styles/GlobalStyle';
import { AnimationStyles } from './styles/AnimationStyles';
/* import { sendProductsToStore } from './redux/productos/productosActions';
import { sendStockToStore } from './redux/stock/stockActions'; */
import { setUser } from './redux/user/userActions';
import Home from './pages/Home';
import Products from './pages/Products';
import Velas from './pages/Velas';
import Sales from './pages/Sales';
import Bombas from './pages/Bombas';
import Difusores from './pages/Difusores';
import Galeria from './pages/Galeria';
import Orders from './pages/Orders';

import {
  createBrowserRouter,
  Outlet /* , useLoaderData */,
} from 'react-router-dom';
import Index from './pages/Index';

import {
  onAuthStateChange,
  checkIsSignInWithEmail,
  /* updateUserOrdersToDatabase, */
} from './firebase/firebase_auth/auth_utils';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/chakra-ui/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/* import { database } from 'firebase-admin';
 */
export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    /* loader: async () => {
      const productos = await getProductsFromDataBase();
      const stock = await getStockFromDataBase();

      return { productos, stock };
    }, */
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
            path: '/orders',
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();
  /* const { productos, stock } = useLoaderData(); */

  /* useEffect(() => {
    productos && dispatch(sendProductsToStore(productos));
    stock && dispatch(sendStockToStore(stock));
  }, [dispatch, productos, stock]); */

  useEffect(() => {
    checkIsSignInWithEmail();
    onAuthStateChange(dispatch, setUser);
  }, [dispatch, setUser]);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyle />
        <AnimationStyles />
        <Outlet />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
