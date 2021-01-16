import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiArchive, FiBookOpen, FiShoppingCart } from 'react-icons/fi';
import classNames from 'classnames/bind';
import styles from './home.module.css';
const cx = classNames.bind(styles);

const Home = () => {
  return (
    <section>
      <h2>홈</h2>
      <ul className={cx('nav')}>
        <li className={cx('navItem')}>
          <Link to="/profile">
            <FiUser className={cx('icon')} />
            <h3 className={cx('title')}>정보수정</h3>
          </Link>
        </li>
        <li className={cx('navItem')}>
          <Link to="/products">
            <FiArchive className={cx('icon')} />
            <h3 className={cx('title')}>상품보기</h3>
          </Link>
        </li>
        <li className={cx('navItem')}>
          <Link to="/board">
            <FiBookOpen className={cx('icon')} />
            <h3 className={cx('title')}>게시판</h3>
          </Link>
        </li>
        <li className={cx('navItem')}>
          <Link to="/cart">
            <FiShoppingCart className={cx('icon')} />
            <h3 className={cx('title')}>장바구니</h3>
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
