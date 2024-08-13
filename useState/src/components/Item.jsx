import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Item.module.css';

function Item({ foodItem, bought, handleBuyButtonClicked }) {
  return (
    <li
      className={`list-group-item ${styles.kgItem} ${
        bought ? 'bg-success' : ''
      }`}
    >
      <span className={styles.kgSpan}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
