import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppRouter from './router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
