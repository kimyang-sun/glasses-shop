import React from 'react';
import styles from './comments.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Comments = () => {
  return (
    <div className={cx('container')}>
      <p className={cx('title')}>댓글</p>
      <ul className={cx('contents')}></ul>
      <div className={cx('inputBox')}>
        <input
          className={cx('input')}
          type="text"
          placeholder="댓글을 입력하세요"
        />
        <button className={cx('button')}>등록</button>
      </div>
    </div>
  );
};

export default Comments;
