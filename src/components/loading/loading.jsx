import React from 'react';
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.bg}>
      <span className={styles.content}></span>
    </div>
  );
};

export default Loading;
