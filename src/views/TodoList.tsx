import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { Todo } from '../types/Todo';
import { useActions, useAppState } from '../presenter/presenter';

import React from 'react';

const TodoListItem = ({ todo }: { todo: Todo }) => {
  const { toggleChecked } = useActions();

  return (
    <li key={todo.id} className="relative">
      <label className="cursor-pointer" title="toggle complete">
        <input
          type="checkbox"
          className="-ml-6 mt-1 absolute"
          checked={todo.completedTimestamp !== undefined}
          onChange={() => toggleChecked(todo.id)}
        />
        {todo.detail}
      </label>
      <a
        href={`/edit/${todo.id}`}
        title="edit"
        className="inline ml-2 text-blue-500 hover:text-blue-800"
      >
        <PencilSquareIcon className="h-4 w-4 mb-0.5 inline " />
      </a>
      <p>
        <span className="text-sm text-slate-400">
          Created: {todo.createdTimestamp}
        </span>
        {todo.completedTimestamp && (
          <>
            <br />
            <span className="text-sm text-slate-400">
              Completed: {todo.completedTimestamp}
            </span>
          </>
        )}
      </p>
    </li>
  );
};

export const TodoList = () => {
  const { completedTodos, incompleteTodos, shouldHideChecked, todos } =
    useAppState();
  const { hideChecked } = useActions();
  return (
    <div>
      <h1>To-Do List</h1>
      <label className="relative inline-flex items-center cursor-pointer mb-4">
        <input
          type="checkbox"
          checked={shouldHideChecked}
          className="sr-only peer"
          onChange={hideChecked}
        />
        <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium">
          Hide completed to-do items
        </span>
      </label>
      {todos.length === 0 ? (
        <p>No ToDo items found.</p>
      ) : (
        <>
          <ul>
            {incompleteTodos.map(todo => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
            {!shouldHideChecked &&
              completedTodos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
              ))}
          </ul>
        </>
      )}
    </div>
  );
};
