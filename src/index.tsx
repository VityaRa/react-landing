import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './components/root/Root';

import { GlobalStyle } from "./styles/global"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Root />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
