import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import firebaseApp from './service/firebase';
console.log(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
