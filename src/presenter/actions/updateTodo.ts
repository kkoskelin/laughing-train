import { Context } from '../presenter';

export const updateTodo = (context: Context, detail: string) => {
  if (context.state.itemToEdit) {
    context.state.itemToEdit.detail = detail;
    context.state.currentPage = 'TodoList';
  }
};
