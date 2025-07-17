import { useState } from 'react';
import TodoItem from './TodoItem';

const App = () => {
  const [todos, setTodos] = useState(['Eat', 'Sleep', 'Code']);

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, i) => (
        <TodoItem key={i} text={todo} onDelete={() => deleteTodo(i)} />
      ))}
    </div>
  );
};

export default App;
