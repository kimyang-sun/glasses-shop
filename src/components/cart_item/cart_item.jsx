import React from 'react';
import classNames from 'classnames/bind';
import styles from './cart_item.module.css';
const cx = classNames.bind(styles);

const CartItem = props => {
  const {
    id,
    name,
    url,
    price,
    coupon,
    count,
    handleCheck,
    handleIncrease,
    handleDecrease,
  } = props;

  return (
    <li className={cx('item')}>
      <input
        className={cx('check')}
        type="checkbox"
        onChange={e => handleCheck(e, id, price)}
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
      <span className={cx('price')}>{price} 원</span>
      <span className={cx('sale', { coupon })}>
        {coupon ? '쿠폰 O' : '쿠폰 X'}
      </span>
    </li>
  );
};

export default CartItem;
