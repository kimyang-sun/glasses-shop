import React from 'react';
import styles from './board_detail.module.css';
import classNames from 'classnames/bind';
import Comments from 'components/comments/comments';
import defaultImg from 'images/no_img.jpg';
const cx = classNames.bind(styles);

const BoardDetail = ({ writing }) => {
  const { title, writer, content, img, date } = writing;

  return (
    <div className={cx('container')}>
      <h4 className={cx('title')}>{title}</h4>
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
        <span className={cx('writer')}>{writer}</span>
        <span className={cx('date')}>{`(${date})`}</span>
      </div>
      <div className={cx('btnBox')}>
        <button className={cx('modify')}>수정</button>
        <button className={cx('delete')}>삭제</button>
      </div>
      <p className={cx('content')}>{content}</p>
      <Comments />
    </div>
  );
};

export default BoardDetail;
