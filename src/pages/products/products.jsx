import Loading from 'components/loading/loading';
import Product from 'components/product/product';
import { useCartDispatch } from 'contexts/cart_context';
import { useProductDispatch, useProductState } from 'contexts/products_context';
import React, { useEffect, useState } from 'react';
import styles from './products.module.css';

const Products = ({ cartRepository, user }) => {
  const [init, setInit] = useState(false);
  const productState = useProductState();
  const productDispatch = useProductDispatch();
  const cartDispatch = useCartDispatch();

  // 상품 업데이트 (장바구니 상태)
  useEffect(() => {
    cartRepository.syncProduct(user.uid, setInit, cartDataId => {
      console.log(cartDataId);
      productDispatch({
        type: 'CART_UPDATE',
        ids: cartDataId,
      });
    });
  }, [cartRepository, productDispatch, user]);

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
      cartRepository.removeCart(user.uid, id); // Firestore에 적용
    } else {
      const item = { id, name, url, price, coupon, count: 1 };
      cartDispatch({
        type: 'ADD',
        item: { ...item },
      });
      productDispatch({
        type: 'CART_ADD',
        id,
      });
      cartRepository.saveCart(user.uid, id, item); // Firestore에 적용
    }
  };

  return (
    <>
      {init ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Products;
