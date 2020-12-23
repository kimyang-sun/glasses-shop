import { StoreProvider } from 'contexts/context_store';
import { useEffect, useState } from 'react';
import Loading from './loading/loading';
import AppRouter from './router';

function App({ authService }) {
  const [init, setInit] = useState(false); // 로그인정보가 불러와지는걸 기다리기 위한 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  useEffect(() => {
    authService.onAuthChange(setIsLoggedIn, setInit);
  }, [authService]); // 로그인정보가 변경될때마다 실행됨

  return (
    <StoreProvider>
      <>
        {init ? (
          <AppRouter authService={authService} isLoggedIn={isLoggedIn} />
        ) : (
          <Loading />
        )}
      </>
    </StoreProvider>
  );
}

export default App;
