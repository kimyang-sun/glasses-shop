import Product from 'components/product/product';
import { useProductState } from 'contexts/products_context';
import React from 'react';
import styles from './products.module.css';

const Products = () => {
  const productState = useProductState();
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
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
