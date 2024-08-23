import React, { useRef } from 'react';
import { MdAddComment } from 'react-icons/md';

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on : ${dueDate}`);

    if (todoName && dueDate) {
      onNewItem(todoName, dueDate);
      todoNameElement.current.value = ''; // Clear the input fields
      dueDateElement.current.value = ''; // Clear the input fields
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
