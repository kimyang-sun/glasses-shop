import { CartProvider } from 'contexts/cart_context';
import { ProductProvider } from 'contexts/products_context';
import { useEffect, useState } from 'react';
import Loading from './loading/loading';
import AppRouter from './router';

function App({ authService, cartRepository }) {
  const [init, setInit] = useState(false); // 로그인정보가 불러와지는걸 기다리기 위한 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthChange(setIsLoggedIn, setInit, setUserObj);
  }, [authService]); // 로그인정보가 변경될때마다 실행됨

  return (
    <ProductProvider>
      <CartProvider>
        {init ? (
          <AppRouter
            authService={authService}
            cartRepository={cartRepository}
            isLoggedIn={isLoggedIn}
            user={userObj}
          />
        ) : (
          <Loading />
        )}
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
