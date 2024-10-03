// App.js
import React, { useState, useMemo, useCallback } from 'react';
import Todo from './components/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [inputValue, setInputValue] = useState('');

  const addTodo = useCallback(() => {
    if (inputValue) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue('');
    }
  }, [inputValue]);

  const removeTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'Completed') return todo.completed;
      if (filter === 'Active') return !todo.completed;
      return true; // All
    });
  }, [todos, filter]);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Active')}>Active</button>
      </div>
      <div>
        {filteredTodos.map(todo => (
          <Todo key={todo.id} todo={todo} onRemove={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
