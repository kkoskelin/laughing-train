import { Context } from '../presenter';

export const saveTodo = (context: Context) => {
  context.state.currentPage = 'TodoList';
};
