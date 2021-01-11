import React from 'react';
import styles from './comment.module.css';
import classNames from 'classnames/bind';
import defaultImg from 'images/no_img.jpg';
const cx = classNames.bind(styles);

const Comment = props => {
  const { img, name, content, date } = props;
  return (
    <li className={cx('box')}>
      <div className={cx('information')}>
        {img ? (
          <span
            className={cx('img')}
            style={{ backgroundImage: `url(${img})` }}
          ></span>
        ) : (
          <span
            className={cx('img')}
            style={{ backgroundImage: `url(${defaultImg})` }}
          ></span>
        )}
        <span className={cx('name')}>{name ? name : '이름없음'}</span>
        <span className={cx('date')}>{date}</span>
      </div>
      <p className={cx('content')}>{content}</p>
      <div className={cx('btnBox')}>
        <button className={cx('edit')}>수정</button>
        <button className={cx('delete')}>삭제</button>
      </div>
    </li>
  );
};

export default Comment;
