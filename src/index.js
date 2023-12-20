import React from 'react';
import { App } from 'App';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/confilogi">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
