import React from 'react';
import styles from './Item.module.css';

function Item({ foodItem }) {
  return (
    <li className={`list-group-item ${styles['kgItem']}`}>
      <span className={styles.kgSpan}>{foodItem}</span>
    </li>
  );
}

export default Item;
