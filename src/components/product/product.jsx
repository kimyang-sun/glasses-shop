import classNames from 'classnames/bind';
import { useProductDispatch } from 'contexts/products_context';
import React, { useMemo } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './product.module.css';

const cx = classNames.bind(styles);

const Product = props => {
  const { id, name, url, price, coupon, cart } = props;
  const productDispatch = useProductDispatch();
  const cartIcon = useMemo(() => <AiOutlineShoppingCart size="24" />, []);

  const onToggle = () => {
    productDispatch({
      type: 'TOGGLE',
      id,
    });
  };

  return (
    <li className={cx('item')}>
      <div>
        <img className={cx('img')} src={url} alt={name} />
        <span className={cx('name')}>{name}</span>
        <span className={cx('price')}>{price} 원</span>
        <button className={cx('button', { cart })} onClick={onToggle}>
          {cartIcon}
          {cart ? <span>빼기</span> : <span>담기</span>}
        </button>
      </div>
    </li>
  );
};

export default Product;
