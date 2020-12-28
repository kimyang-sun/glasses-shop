import classNames from 'classnames/bind';
import React, { useMemo } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './product.module.css';
const cx = classNames.bind(styles);

const Product = props => {
  const { name, url, price, coupon, cart, handleAddOrRemove } = props;
  const cartIcon = useMemo(() => <AiOutlineShoppingCart size="24" />, []);

  return (
    <li className={cx('item')}>
      <div>
        <img className={cx('img')} src={url} alt={name} />
        <span className={cx('name')}>{name}</span>
        <span className={cx('price')}>{price.toLocaleString()} 원</span>
        <button
          className={cx('button', { cart })}
          onClick={() => handleAddOrRemove(props)}
        >
          {cartIcon}
          {cart ? <span>빼기</span> : <span>담기</span>}
        </button>
        {coupon && <span className={cx('coupon')}>💰</span>}
      </div>
    </li>
  );
};

export default Product;
