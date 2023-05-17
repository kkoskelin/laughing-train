import { useAppState } from '../presenter/presenter';
import React from 'react';

export const TodoList = () => {
  const { todos } = useAppState();
  return (
    <div>
      <p>This is a to-do list.</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.detail}</li>
        ))}
      </ul>
    </div>
  );
};
