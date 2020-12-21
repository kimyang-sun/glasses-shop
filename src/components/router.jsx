import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              Login on
            </Route>
          </>
        ) : (
          <Route exact path="/">
            not login
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
