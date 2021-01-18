import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Header = () => {
  const location = useLocation();

  return (
    <header className={cx('header')}>
      <h1 className={cx('title')}>
        <Link to="/">Glasses Shop</Link>
      </h1>
      <nav className={cx('nav')}>
        <ul>
          <li className={cx({ current: location.pathname === '/products' })}>
            <Link to="/products">상품</Link>
          </li>
          <li className={cx({ current: location.pathname.includes('/board') })}>
            <Link to="/board">게시판</Link>
          </li>
          <li className={cx({ current: location.pathname === '/cart' })}>
            <Link to="/cart">장바구니</Link>
          </li>
          <li className={cx({ current: location.pathname === '/profile' })}>
            <Link to="/profile">내 정보</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
