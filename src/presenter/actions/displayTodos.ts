import { Context } from '../presenter';

export const displayTodos = async (context: Context) => {
  context.state.todos = await context.effects.todoGateway.getAll();
  context.state.currentPage = 'TodoList';
};
