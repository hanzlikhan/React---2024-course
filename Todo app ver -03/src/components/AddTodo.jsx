import React, { useState } from 'react';
import { MdAddComment } from 'react-icons/md';
function AddTodo({ onNewItem }) {
  const [itemName, setItemName] = useState('');
  const [itemDueDate, setItemDueDate] = useState('');

  const handleAddClick = () => {
    if (itemName && itemDueDate) {
      onNewItem(itemName, itemDueDate);
      setItemName('');
      setItemDueDate('');
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={itemDueDate}
            onChange={(e) => setItemDueDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddClick}
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
