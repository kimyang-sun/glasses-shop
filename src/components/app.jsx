import { CartProvider } from 'contexts/cart_context';
import { ProductProvider } from 'contexts/products_context';
import { ProfileProvider } from 'contexts/profile_context';
import { useCallback, useEffect, useState } from 'react';
import Loading from './loading/loading';
import AppRouter from './router';

function App({ authService, cartRepository, profileRepository, ImageInput }) {
  const [init, setInit] = useState(false); // 로그인정보가 불러와지는걸 기다리기 위한 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthChange(setIsLoggedIn, setInit, setUserObj);
  }, [authService]); // 로그인정보가 변경될때마다 실행됨

  // 로그아웃 핸들러 (재사용을 위해 useCallback 사용)
  const logoutHandler = useCallback(() => {
    authService.logout();
  }, [authService]);

  return (
    <ProfileProvider>
      <ProductProvider>
        <CartProvider>
          {init ? (
            <AppRouter
              authService={authService}
              cartRepository={cartRepository}
              profileRepository={profileRepository}
              isLoggedIn={isLoggedIn}
              user={userObj}
              logoutHandler={logoutHandler}
              ImageInput={ImageInput}
            />
          ) : (
            <Loading />
          )}
        </CartProvider>
      </ProductProvider>
    </ProfileProvider>
  );
}

export default App;
