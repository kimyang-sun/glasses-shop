import React from 'react';
import styles from './pagination.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Pagination = ({ totalPosts, page, paginate, postsPerPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className={cx('pages')}>
      {pageNumbers.map(number => (
        <li className={cx('page')} key={number}>
          <button
            className={cx('pageBtn', { current: page === number })}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
