import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoItemsContext } from '../store/todo-items-store';


function TodoItems({ todoItems, setTodoItems }) {
  const handleDeleteItem = (index) => {
    const updatedItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedItems);
  };
  const TodoItemsContext = useContext(TodoItemsContext);
  console.log(`items from context : ${TodoItemsContext}`)
  
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
