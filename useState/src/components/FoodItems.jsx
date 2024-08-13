import React, { useState } from 'react';
import Item from './Item';

function FoodItems({ items }) {
  const [activeItems, setActiveItems] = useState([]);
  const onBuyButton = (item) => {
    if (!activeItems.includes(item)) {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClicked={() => onBuyButton(item)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;
