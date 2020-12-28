import Product from 'components/product/product';
import { useCartDispatch } from 'contexts/cart_context';
import { useProductDispatch, useProductState } from 'contexts/products_context';
import React from 'react';
import styles from './products.module.css';

const Products = () => {
  const productState = useProductState();
  const productDispatch = useProductDispatch();
  const cartDispatch = useCartDispatch();

  // 카트 담기 및 빼기
  const handleAddOrRemove = item => {
    const { id, name, url, price, coupon, cart } = item;
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
    <section>
      <h2>상품목록</h2>
      <ul className={styles.list}>
        {productState.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            url={product.url}
            price={product.price}
            coupon={product.coupon}
            cart={product.cart}
            handleAddOrRemove={handleAddOrRemove}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
