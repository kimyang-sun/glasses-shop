import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">Glasses Shop</Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/products">상품</Link>
          </li>
          <li>
            <Link to="/board">게시판</Link>
          </li>
          <li>
            <Link to="/cart">장바구니</Link>
          </li>
          <li>
            <Link to="/profile">내 정보</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
