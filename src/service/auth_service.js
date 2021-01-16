import { firebaseAuth, googleProvider } from './firebase';

class AuthService {
  async login(newAccount, email, password) {
    try {
      let data;
      if (newAccount) {
        // 만약 계정이 새로운거면 새로 생성하고
        data = await firebaseAuth.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // 계정이 있던 계정이면 회원가입이 됩니다
        // eslint-disable-next-line no-unused-vars
        data = await firebaseAuth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  socialLogin() {
    return firebaseAuth.signInWithPopup(googleProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(setIsLoggedIn, setInit, setUserObj) {
    // 로그인 정보 변경될때 실행되는데 로그인상태와 초기화상태를 가져옴
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true); // 유저가 있는상태면 로그인상태를 true로 바꿈
        setUserObj(user); // 유저가 있으면 유저를 세팅해줌
      } else {
        setIsLoggedIn(false); // 유저가 없으면 로그인상태 false
      }
      setInit(true); // 다 불러와졌다는걸 상태로 true로 해줌
    });
  }
}

export default AuthService;
