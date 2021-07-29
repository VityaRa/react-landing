import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/main/Main';

import { GlobalStyle } from "./styles/global"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Main />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
