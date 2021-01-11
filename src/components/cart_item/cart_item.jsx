import React from 'react';
import classNames from 'classnames/bind';
import styles from './cart_item.module.css';
const cx = classNames.bind(styles);

const CartItem = ({
  id,
  name,
  url,
  price,
  coupon,
  count,
  isChecked,
  handleCheck,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <li className={cx('item')}>
      <input
        className={cx('check')}
        type="checkbox"
        onChange={e => handleCheck(e, id, price, coupon, count)}
        checked={isChecked.some(check => check.id === id) ? true : false}
      />
      <img className={cx('image')} src={url} alt={name} />
      <span className={cx('name')}>{name}</span>
      <div className={cx('countBox')}>
        <button className={cx('button')} onClick={() => handleIncrease(id)}>
          ＋
        </button>
        <input className={cx('count')} type="text" value={count} readOnly />
        <button className={cx('button')} onClick={() => handleDecrease(id)}>
          －
        </button>
      </div>
      <span className={cx('price')}>{(price * count).toLocaleString()} 원</span>
      <span className={cx('sale', { coupon })}>
        <span className={cx('label')}>쿠폰</span>
        {coupon ? coupon : '없음'}
      </span>
    </li>
  );
};

export default CartItem;
