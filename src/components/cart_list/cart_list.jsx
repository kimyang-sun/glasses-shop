import CartItem from 'components/cart_item/cart_item';
import { useCartDispatch } from 'contexts/cart_context';
import { useProductDispatch } from 'contexts/products_context';
import React from 'react';
import styles from './cart_list.module.css';

const CartList = ({ cartState, isChecked, setIsChecked }) => {
  const dispatch = useCartDispatch();
  const productDispatch = useProductDispatch();
  const onRemove = () => {
    const checked = [...isChecked];
    console.log(checked);
    console.log(cartState);
    if (checked.length === 0) return;
    dispatch({
      type: 'SELECT_REMOVE',
      checked,
    });
    productDispatch({
      type: 'CART_SELECT_REMOVE',
      checked,
    });
    setIsChecked([]);
  };

  return (
    <>
      {cartState.length === 0 ? (
        <div className={styles.empty}>장바구니가 비었습니다 😥</div>
      ) : (
        <>
          <button className={styles.remove} onClick={onRemove}>
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
                dispatch={dispatch}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CartList;
