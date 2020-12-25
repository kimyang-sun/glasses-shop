import CartList from 'components/cart_list/cart_list';
import { useCartState } from 'contexts/cart_context';
import React, { useState } from 'react';

const Cart = () => {
  const cartState = useCartState();
  const [isChecked, setIsChecked] = useState([]);
  return (
    <section>
      <h2>장바구니</h2>
      <CartList
        cartState={cartState}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    </section>
  );
};

export default Cart;
