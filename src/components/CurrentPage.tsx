import { useAppState } from '../presenter/presenter';
import React from 'react';

import { LoadingTemplate } from '../views/LoadingTemplate';
import { RandomInfo } from './RandomInfo';
import { TodoList } from '../views/TodoList';

export const CurrentPage = () => {
  const { currentPage } = useAppState();
  return (
    <>
      {currentPage == 'TodoList' && <TodoList />}
      {currentPage == 'Loading' && <LoadingTemplate />}
      {currentPage == 'RandomInfo' && <RandomInfo />}
    </>
  );
};
