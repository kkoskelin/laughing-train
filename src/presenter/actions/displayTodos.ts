import { Context } from '../presenter';

export const displayTodos = (context: Context) => {
  context.state.currentPage = 'TodoList';
};
