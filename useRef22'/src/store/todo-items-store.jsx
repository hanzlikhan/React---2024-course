import { createContext } from 'react';

const TodoItemsContext = createContext({
  todoItems: [],
  setTodoItems: () => {},
});

export { TodoItemsContext };
