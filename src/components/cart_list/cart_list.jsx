import CartItem from 'components/cart_item/cart_item';
import React from 'react';
import styles from './cart_list.module.css';

const CartList = ({
  cartState,
  isChecked,
  handleCheck,
  handleCheckAll,
  allChecked,
  handleRemove,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <>
      {cartState.length === 0 ? (
        <p className={styles.empty}>장바구니가 비었습니다 😥</p>
      ) : (
        <>
          <input
            className={styles.check}
            type="checkbox"
            onChange={e => handleCheckAll(e)}
            checked={allChecked ? true : false}
          />
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
                isChecked={isChecked}
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
