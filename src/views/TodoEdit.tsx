import { useActions, useAppState } from '../presenter/presenter';

import React from 'react';

export const TodoEdit = () => {
  const { selectedTodo } = useAppState();
  const { saveTodo, updateTodo } = useActions();
  return (
    <div>
      {selectedTodo && (
        <>
          <h1>Edit To-Do</h1>
          <textarea onChange={e => updateTodo(e.target.value)}>
            {selectedTodo.detail}
          </textarea>
          <button onClick={saveTodo}>Save</button>
        </>
      )}
      {!selectedTodo && <h1>To-Do item not found.</h1>}
    </div>
  );
};
