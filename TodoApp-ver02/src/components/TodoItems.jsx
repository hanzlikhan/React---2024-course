import TodoItem from './TodoItem'; // Assuming TodoItem is in the same directory

function TodoItems({ todoitem }) {
  return (
    <div className="itemsContainer">
      {todoitem.map((item, index) => (
        <TodoItem key={index} todoDate={item.date} todoName={item.name} />
      ))}
    </div>
  );
}

export default TodoItems;
