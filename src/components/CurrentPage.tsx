import { useAppState } from '../presenter/presenter';
import React from 'react';

import { LoadingTemplate } from '../views/LoadingTemplate';
import { TodoEdit } from '../views/TodoEdit';
import { TodoList } from '../views/TodoList';

export const CurrentPage = () => {
  const { currentPage } = useAppState();
  return (
    <>
      {currentPage == 'TodoList' && <TodoList />}
      {currentPage == 'TodoEdit' && <TodoEdit />}
      {currentPage == 'Loading' && <LoadingTemplate />}
    </>
  );
};
