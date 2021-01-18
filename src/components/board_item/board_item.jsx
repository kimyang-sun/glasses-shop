import React from 'react';
import styles from './board_item.module.css';
import classNames from 'classnames/bind';
import defaultImg from 'images/no_img.jpg';
const cx = classNames.bind(styles);

const BoardItem = props => {
  const { title, writer, img, date, detailOpen } = props;
  return (
    <li className={cx('item')} onClick={() => detailOpen(props)}>
      <div className={cx('box')}>
        {img ? (
          <div
            className={cx('img')}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ) : (
          <div
            className={cx('img')}
            style={{ backgroundImage: `url(${defaultImg})` }}
          ></div>
        )}
        <div className={cx('text')}>
          <p className={cx('title')}>{title}</p>
          <span className={cx('writer')}>{writer}</span>
        </div>
      </div>
      <div className={cx('date')}>{date}</div>
    </li>
  );
};

export default React.memo(BoardItem);
