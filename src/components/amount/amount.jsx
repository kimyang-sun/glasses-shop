import React, { useEffect, useMemo, useState } from 'react';
import styles from './amount.module.css';

const Amount = ({ isChecked, handleCoupon, discountState }) => {
  const [discount, setDiscount] = useState(0);

  // 상품 가격 표시
  const price = useMemo(
    () => isChecked.reduce((acc, cur) => (acc += cur.price), 0),
    [isChecked]
  );

  // 쿠폰 유무
  const couponState = useMemo(() => isChecked.some(check => check.coupon), [
    isChecked,
  ]);

  // 할인 가격
  useEffect(() => {
    if (couponState) {
      if (discountState === 'not') {
        setDiscount(0);
      } else if (discountState === 'percent') {
        setDiscount((price * 10) / 100);
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
  }, [discountState, isChecked, price]);

  return (
    <div className={styles.container}>
      <h3>결제 금액</h3>
      <ul className={styles.coupons}>
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
          <label htmlFor="fixed">20,000원 할인</label>
        </li>
      </ul>
      <div>
        <span>상품가격</span>
        <span>{price.toLocaleString()} 원</span>
      </div>
      <div>
        <span>할인가격</span>
        <span>{discount}원</span>
      </div>
      <div>
        <span>최종가격</span>
        <span>{price}원</span>
      </div>
    </div>
  );
};

export default Amount;
