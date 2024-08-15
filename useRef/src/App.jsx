import React, { useState } from 'react';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';
import AddTodo from './components/AddTodo';
import WelcomeMsg from './components/WelcomeMsg'; // Import WelcomeMsg component
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`Item name is ${itemName} and the due date is ${itemDueDate}`);
    const newTodoItem = { name: itemName, date: itemDueDate };
    setTodoItems([...todoItems, newTodoItem]);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg />} {/* Display welcome message when the list is empty */}
      <TodoItems todoItems={todoItems} setTodoItems={setTodoItems} /> {/* Pass correct props */}
    </center>
  );
}

export default App;
