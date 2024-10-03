// Todo.js
import React from 'react';

const Todo = React.memo(({ todo, onRemove }) => {
  console.log(`Rendering Todo: ${todo.text}`);
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
});

export default Todo;
