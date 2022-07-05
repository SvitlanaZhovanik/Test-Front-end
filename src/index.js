import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import 'modern-normalize/modern-normalize.css';
import './styles/base.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
