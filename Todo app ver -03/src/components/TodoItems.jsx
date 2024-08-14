import React from 'react';
import TodoItem from './TodoItem';

function TodoItems({ todoItems, setTodoItems }) {
  const handleDeleteItem = (index) => {
    const updatedItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedItems);
  };

  return (
    <div className="itemsContainer">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.date}
          onDelete={() => handleDeleteItem(index)}
        />
      ))}
    </div>
  );
}

export default TodoItems;
