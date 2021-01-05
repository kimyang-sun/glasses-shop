import { useCartDispatch } from 'contexts/cart_context';
import { useProductDispatch } from 'contexts/products_context';
import { useProfileDispatch } from 'contexts/profile_context';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from '../pages/board/board';
import Cart from '../pages/cart/cart';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Products from '../pages/products/products';
import Profile from '../pages/profile/profile';
import Header from './header/header';

const AppRouter = ({
  authService,
  cartRepository,
  profileRepository,
  isLoggedIn,
  user,
  logoutHandler,
  ImageInput,
}) => {
  const profileDispatch = useProfileDispatch();
  const productDispatch = useProductDispatch();
  const cartDispatch = useCartDispatch();

  // 프로필 실시간 상태
  const [profile, setProfile] = useState({
    name: '',
    message: '',
    img: null,
  });

  const profileOnChange = useCallback(
    e => {
      const { value, name } = e.target;
      setProfile({
        ...profile,
        [name]: value,
      });
    },
    [profile]
  );

  const imgOnChange = useCallback(
    fileURL => {
      setProfile({
        ...profile,
        img: fileURL,
      });
    },
    [profile]
  );

  // 프로필 이미지 내리기
  const imgOnRemove = useCallback(() => {
    if (!profile.img) return;
    setProfile({
      ...profile,
      img: null,
    });
  }, [profile]);

  // 프로필 받아오기
  useEffect(() => {
    if (user) {
      profileRepository.syncProfile(user.uid, profileData => {
        profileDispatch({
          type: 'IMPORT',
          profile: profileData,
        });
        setProfile({ ...profileData });
      });
    }
  }, [profileDispatch, profileRepository, user]);

  // 상품 받아오기 (장바구니 상태)
  useEffect(() => {
    if (user) {
      cartRepository.syncProduct(user.uid, cartDataId => {
        productDispatch({
          type: 'CART_IMPORT',
          ids: cartDataId,
        });
      });
    }
  }, [cartRepository, productDispatch, user]);

  // 장바구니 받아오기
  useEffect(() => {
    if (user) {
      cartRepository.syncCart(user.uid, cartData => {
        cartDispatch({
          type: 'IMPORT',
          carts: cartData,
        });
      });
    }
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
              <Profile
                profileRepository={profileRepository}
                user={user}
                logoutHandler={logoutHandler}
                profile={profile}
                onChange={profileOnChange}
                imgOnChange={imgOnChange}
                imgOnRemove={imgOnRemove}
                ImageInput={ImageInput}
              />
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
