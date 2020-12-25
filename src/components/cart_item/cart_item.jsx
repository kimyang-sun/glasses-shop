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
    dispatch,
    isChecked,
    setIsChecked,
  } = props;

  const onCheck = e => {
    if (e.target.checked) {
      const checkedItem = {
        id,
        price,
      };
      setIsChecked([...isChecked, checkedItem]);
    } else {
      const filterItem = isChecked.filter(item => item.id !== id);
      setIsChecked(filterItem);
    }
  };

  const onIncrease = () => {
    dispatch({
      type: 'INCREASE',
      id,
    });
  };
  const onDecrease = () => {
    dispatch({
      type: 'DECREASE',
      id,
    });
  };

  return (
    <li className={cx('item')}>
      <input className={cx('check')} type="checkbox" onChange={onCheck} />
      <img className={cx('image')} src={url} alt={name} />
      <span className={cx('name')}>{name}</span>
      <div className={cx('countBox')}>
        <button className={cx('button')} onClick={onIncrease}>
          ＋
        </button>
        <input className={cx('count')} type="text" value={count} readOnly />
        <button className={cx('button')} onClick={onDecrease}>
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
