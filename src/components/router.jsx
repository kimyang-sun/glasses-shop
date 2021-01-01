import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from '../pages/board/board';
import Cart from '../pages/cart/cart';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Products from '../pages/products/products';
import Profile from '../pages/profile/profile';
import Header from './header/header';

const AppRouter = ({ authService, cartRepository, isLoggedIn, user }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Header />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products cartRepository={cartRepository} user={user} />
            </Route>
            <Route exact path="/board">
              <Board />
            </Route>
            <Route exact path="/cart">
              <Cart cartRepository={cartRepository} user={user} />
            </Route>
            <Route exact path="/profile">
              <Profile user={user} />
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
