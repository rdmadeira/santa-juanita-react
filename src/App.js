import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './components/header/Header.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default App;
