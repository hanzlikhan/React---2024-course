import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoItemsContext } from '../store/todo-items-store';

function TodoItems() {
  const { todoItems, setTodoItems } = useContext(TodoItemsContext);

  const handleDeleteItem = (index) => {
    const updatedItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedItems);
  };

  return (
    <div className="itemsContainer">
      {todoItems.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoName={item.name}
            todoDate={item.date}
            onDelete={() => handleDeleteItem(index)}
          />
        ))
      )}
    </div>
  );
}

export default TodoItems;
