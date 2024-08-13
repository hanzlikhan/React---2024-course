import React from "react";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const todoitems = [
    { name: "milk", date: "06/08/2024" },
    { name: "ghee", date: "06/08/2024" },
    { name: "cosmetics", date: "06/08/2024" }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoitem={todoitems} />
    </center>
  );
}

export default App;
