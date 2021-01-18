import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiArchive, FiBookOpen, FiShoppingCart } from 'react-icons/fi';
import classNames from 'classnames/bind';
import styles from './home.module.css';
const cx = classNames.bind(styles);

const Home = () => {
  const profileIcon = useMemo(() => <FiUser className={cx('icon')} />, []);
  const productIcon = useMemo(() => <FiArchive className={cx('icon')} />, []);
  const boardIcon = useMemo(() => <FiBookOpen className={cx('icon')} />, []);
  const cartIcon = useMemo(() => <FiShoppingCart className={cx('icon')} />, []);

  return (
    <section>
      <h2>홈</h2>
      <ul className={cx('nav')}>
        <li className={cx('navItem')}>
          <Link to="/profile">
            {profileIcon}
            <h3 className={cx('title')}>정보수정</h3>
          </Link>
        </li>
        <li className={cx('navItem')}>
          <Link to="/products">
            {productIcon}
            <h3 className={cx('title')}>상품보기</h3>
          </Link>
        </li>
        <li className={cx('navItem')}>
          <Link to="/cart">
            {cartIcon}
            <h3 className={cx('title')}>장바구니</h3>
          </Link>
        </li>
        <li className={cx('navItem')}>
          <Link to="/board">
            {boardIcon}
            <h3 className={cx('title')}>게시판</h3>
          </Link>
        </li>
        <li>
          <Link to="/profile"></Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
