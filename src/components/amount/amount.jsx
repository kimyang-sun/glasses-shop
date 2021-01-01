import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './amount.module.css';
const cx = classNames.bind(styles);

const Amount = ({ isChecked, handleCoupon, discountState }) => {
  const [discount, setDiscount] = useState(0);

  // 상품 가격 표시
  const price = useMemo(
    () =>
      isChecked.reduce((acc, cur) => {
        return (acc += cur.price * cur.count);
      }, 0),
    [isChecked]
  );

  // 쿠폰 유무
  const couponState = useMemo(() => isChecked.some(check => check.coupon), [
    isChecked,
  ]);

  // 할인 가격
  useEffect(() => {
    // 쿠폰이 존재하는 상태면 쿠폰이 계산이 되어야 합니다.
    if (couponState) {
      if (discountState === 'not') {
        setDiscount(0);
      } else if (discountState === 'percent') {
        const coupon = isChecked.reduce(
          (acc, cur) => (cur.coupon ? (acc += (cur.price * 10) / 100) : acc),
          0
        );
        setDiscount(coupon);
      } else if (discountState === 'fixed') {
        const coupon = isChecked.reduce(
          (acc, cur) => (cur.coupon ? (acc += cur.coupon) : acc),
          0
        );
        setDiscount(coupon);
      }
    } else {
      setDiscount(0);
    }
  }, [couponState, discountState, isChecked, price]);

  return (
    <div className={cx('container')}>
      <h3 className={cx('title')}>결제 금액</h3>
      <ul className={cx('coupons')}>
        <li>
          <input
            id="not"
            type="radio"
            name="coupon"
            onClick={e => handleCoupon(e)}
            defaultChecked
            disabled={couponState ? false : true}
          />
          <label htmlFor="not">쿠폰 미적용</label>
        </li>
        <li>
          <input
            id="percent"
            type="radio"
            name="coupon"
            onClick={e => handleCoupon(e)}
            disabled={couponState ? false : true}
          />
          <label htmlFor="percent">10% 할인</label>
        </li>
        <li>
          <input
            id="fixed"
            type="radio"
            name="coupon"
            onClick={e => handleCoupon(e)}
            disabled={couponState ? false : true}
          />
          <label htmlFor="fixed">쿠폰값 할인</label>
        </li>
      </ul>
      <div className={cx('box')}>
        <p>
          <span>상품가격</span>
          <span>{price.toLocaleString()} 원</span>
        </p>
        <p>
          <span>할인가격</span>
          <span className={cx('discount-price')}>
            {discount.toLocaleString()} 원
          </span>
        </p>
        <p>
          <span>최종가격</span>
          <span className={cx('final-price')}>
            {price > 0 ? (price - discount).toLocaleString() : 0} 원
          </span>
        </p>
      </div>
    </div>
  );
};

export default Amount;
