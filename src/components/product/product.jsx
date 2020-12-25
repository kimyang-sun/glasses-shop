import classNames from 'classnames/bind';
import { useCartDispatch } from 'contexts/cart_context';
import { useProductDispatch } from 'contexts/products_context';
import React, { useMemo } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './product.module.css';
const cx = classNames.bind(styles);

const Product = props => {
  const { id, name, url, price, coupon, cart } = props;
  const productDispatch = useProductDispatch();
  const cartDispatch = useCartDispatch();
  const cartIcon = useMemo(() => <AiOutlineShoppingCart size="24" />, []);

  const onToggle = () => {
    // 카트상태가 담겨있는 상태면 빼야하고 그렇지 않으면 담아야 합니다.
    if (cart) {
      cartDispatch({
        type: 'REMOVE',
        id,
      });
      productDispatch({
        type: 'CART_REMOVE',
        id,
      });
    } else {
      cartDispatch({
        type: 'ADD',
        item: { id, name, url, price, coupon, count: 1 },
      });
      productDispatch({
        type: 'CART_ADD',
        id,
      });
    }
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
        {coupon && <span className={cx('coupon')}>💰</span>}
      </div>
    </li>
  );
};

export default Product;
