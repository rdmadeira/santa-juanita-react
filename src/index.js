import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Products from './pages/Products';
import Velas from './pages/Velas';
import Sales from './pages/Sales';
import Bombas from './pages/Bombas';
import Difusores from './pages/Difusores';
import Galeria from './pages/Galeria';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter([
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
