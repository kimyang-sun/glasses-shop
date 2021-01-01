import Amount from 'components/amount/amount';
import CartList from 'components/cart_list/cart_list';
import { useCartDispatch, useCartState } from 'contexts/cart_context';
import { useProductDispatch } from 'contexts/products_context';
import React, { useEffect, useState } from 'react';

const Cart = ({ cartRepository, user }) => {
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();
  const productDispatch = useProductDispatch();
  const [isChecked, setIsChecked] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [discountState, setDiscountState] = useState('not');

  // 전체선택 체크상태 관리
  useEffect(() => {
    if (cartState.length === isChecked.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [cartState.length, isChecked.length]);

  // 단일 상품 체크
  const handleCheck = (checked, id, price, coupon, count) => {
    if (checked.target.checked) {
      const checkedItem = {
        id,
        price,
        coupon,
        count,
      };
      setIsChecked([...isChecked, checkedItem]);
    } else {
      const filterItem = isChecked.filter(item => item.id !== id);
      setIsChecked(filterItem);
    }
  };

  // 상품 전체선택 및 해제
  const handleCheckAll = checked => {
    if (checked.target.checked) {
      const cartArr = [];
      cartState.forEach(item => cartArr.push(item));
      setIsChecked(cartArr);
    } else {
      setIsChecked([]);
    }
  };

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
    cartRepository.selectedRemoveCart(user.uid, checked); // Firestore에 적용
  };

  // 상품 수량증가
  const handleIncrease = id => {
    cartDispatch({
      type: 'INCREASE',
      id,
    });
    const numberUpdate = isChecked.map(check =>
      check.id === id ? { ...check, count: check.count + 1 } : check
    );
    setIsChecked(numberUpdate);
  };

  // 상품 수량감소
  const handleDecrease = id => {
    cartDispatch({
      type: 'DECREASE',
      id,
    });
    const numberUpdate = isChecked.map(check =>
      check.id === id ? { ...check, count: check.count - 1 } : check
    );
    setIsChecked(numberUpdate);
  };

  // 쿠폰 클릭
  const handleCoupon = e => {
    switch (e.target.id) {
      case 'not':
        setDiscountState('not');
        break;
      case 'percent':
        setDiscountState('percent');
        break;
      case 'fixed':
        setDiscountState('fixed');
        break;
      default:
        throw new Error(`Invaild event target ${e.target.id}`);
    }
  };

  return (
    <section>
      <h2>장바구니</h2>
      <CartList
        cartState={cartState}
        isChecked={isChecked}
        handleCheck={handleCheck}
        handleCheckAll={handleCheckAll}
        allChecked={allChecked}
        handleRemove={handleRemove}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <Amount
        isChecked={isChecked}
        handleCoupon={handleCoupon}
        discountState={discountState}
      />
    </section>
  );
};

export default Cart;
