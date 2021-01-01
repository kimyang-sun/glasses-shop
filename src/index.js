import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import AuthService from './service/auth_service';
import CartRepository from 'service/cart_repository';

const authService = new AuthService();
const cartRepository = new CartRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cartRepository={cartRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);
