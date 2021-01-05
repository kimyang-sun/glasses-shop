import Pagination from 'components/pagination/pagination';
import Product from 'components/product/product';
import { useCartDispatch } from 'contexts/cart_context';
import { useProductDispatch, useProductState } from 'contexts/products_context';
import React, { useCallback, useRef, useState } from 'react';
import styles from './products.module.css';

const Products = ({ cartRepository, user }) => {
  const productState = useProductState();
  const productDispatch = useProductDispatch();
  const cartDispatch = useCartDispatch();

  // 페이지 관련
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const postsPerPage = useRef(4); // 페이지당 아이템 수

  const indexOfLast = currentPage * postsPerPage.current; // 마지막 페이지 순서
  const indexOfFirst = indexOfLast - postsPerPage.current; // 첫 페이지 순서
  const currentPostsSlice = useCallback(
    posts => {
      const current = posts.slice(indexOfFirst, indexOfLast);
      return current;
    },
    [indexOfFirst, indexOfLast]
  );
  const currentPosts = currentPostsSlice(productState);

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
    <section>
      <h2>상품목록</h2>
      <ul className={styles.list}>
        {currentPosts.map(product => (
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
      <Pagination
        totalPosts={productState.length}
        page={currentPage}
        paginate={setCurrentPage}
        postsPerPage={postsPerPage.current}
      />
    </section>
  );
};

export default Products;
