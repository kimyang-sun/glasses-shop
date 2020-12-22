import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login';

const AppRouter = ({ authService, isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
