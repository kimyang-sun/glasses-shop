import CartList from 'components/cart_list/cart_list';
import { useCartDispatch, useCartState } from 'contexts/cart_context';
import { useProductDispatch } from 'contexts/products_context';
import React, { useState } from 'react';

const Cart = () => {
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const productDispatch = useProductDispatch();
  const [isChecked, setIsChecked] = useState([]);

  // 단일 상품 체크
  const handleCheck = (checked, id, price) => {
    if (checked.target.checked) {
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

  // 상품 전체 선택
  const handleCheckAll = () => {};

  // 상품 삭제
  const handleRemove = () => {
    const checked = [...isChecked];
    if (checked.length === 0) return;
    cartDispatch({
      type: 'SELECT_REMOVE',
      checked,
    });
    productDispatch({
      type: 'CART_SELECT_REMOVE',
      checked,
    });
    setIsChecked([]);
  };

  // 상품 수량증가
  const handleIncrease = id => {
    cartDispatch({
      type: 'INCREASE',
      id,
    });
  };

  // 상품 수량감소
  const handleDecrease = id => {
    cartDispatch({
      type: 'DECREASE',
      id,
    });
  };

  return (
    <section>
      <h2>장바구니</h2>
      <CartList
        cartState={cartState}
        handleCheck={handleCheck}
        handleCheckAll={handleCheckAll}
        handleRemove={handleRemove}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
    </section>
  );
};

export default Cart;
