import React, { useState } from 'react';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';
import AddTodo from './components/AddTodo';
import WelcomeMsg from './components/WelcomeMsg';
import './App.css';
import { TodoItemsContext } from './store/todo-items-store';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`Item name is ${itemName} and the due date is ${itemDueDate}`);
    const newTodoItem = { name: itemName, date: itemDueDate };
    setTodoItems([...todoItems, newTodoItem]);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, setTodoItems }}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMsg todoitems={todoItems} />
        <TodoItems /> {/* Using context, so no need to pass props */}
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
