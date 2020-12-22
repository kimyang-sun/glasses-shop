import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
