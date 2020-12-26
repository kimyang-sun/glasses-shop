import CartItem from 'components/cart_item/cart_item';
import React from 'react';
import styles from './cart_list.module.css';

const CartList = ({
  cartState,
  handleCheck,
  handleCheckAll,
  handleRemove,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <>
      {cartState.length === 0 ? (
        <div className={styles.empty}>장바구니가 비었습니다 😥</div>
      ) : (
        <>
          <button className={styles.all} onClick={() => handleCheckAll()}>
            전체 선택
          </button>
          <button className={styles.remove} onClick={() => handleRemove()}>
            장바구니 삭제
          </button>
          <ul className={styles.items}>
            {cartState.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                url={item.url}
                price={item.price}
                coupon={item.coupon}
                count={item.count}
                handleCheck={handleCheck}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CartList;
