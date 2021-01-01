import { useCartDispatch } from 'contexts/cart_context';
import { useProductDispatch } from 'contexts/products_context';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from '../pages/board/board';
import Cart from '../pages/cart/cart';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Products from '../pages/products/products';
import Profile from '../pages/profile/profile';
import Header from './header/header';

const AppRouter = ({ authService, cartRepository, isLoggedIn, user }) => {
  const productDispatch = useProductDispatch();
  const cartDispatch = useCartDispatch();

  // 상품 업데이트 (장바구니 상태)
  useEffect(() => {
    cartRepository.syncProduct(user.uid, cartDataId => {
      productDispatch({
        type: 'CART_UPDATE',
        ids: cartDataId,
      });
    });
  }, [cartRepository, productDispatch, user]);

  // 장바구니 업데이트
  useEffect(() => {
    cartRepository.syncCart(user.uid, cartData => {
      cartDispatch({
        type: 'UPDATE',
        carts: cartData,
      });
    });
  }, [cartDispatch, cartRepository, user]);

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
