import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FcGoogle } from 'react-icons/fc';
import styles from './login.module.css';
const cx = classNames.bind(styles); // classNames styles 바인딩

const Login = ({ authService }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');

  const onChange = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    authService.login(newAccount, email, password, setError);
  };

  const toggleAccount = () => setNewAccount(prev => !prev);

  return (
    <div className={cx('bg')}>
      <div className={cx('container')}>
        <h1 className={cx('title')}>
          Glasses
          <br />
          Shop
        </h1>
        <form className={cx('form')} onSubmit={onSubmit}>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="이메일"
            required
            onChange={onChange}
          />
          <input
            name="password"
            value={password}
            type="password"
            placeholder="비밀번호"
            required
            onChange={onChange}
          />
          <input
            className={cx('login', { newAccount })}
            type="submit"
            value={newAccount ? '계정 생성' : '로그인'}
          />
          <span className={cx('account')} onClick={toggleAccount}>
            {newAccount ? '계정이 있으신가요?' : '계정이 없으신가요?'}
          </span>
        </form>
        <button
          className={cx('googleLogin')}
          name="google"
          onClick={() => {
            authService.socialLogin().then(console.log);
          }}
        >
          <FcGoogle size="20" className={cx('icon')} />
          구글 계정으로 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
