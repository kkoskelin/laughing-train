import { Context } from '../presenter';
import { Todo } from '../../types/Todo';

export const displayEditTodo = (context: Context, id: string) => {
  context.state.itemToEdit = id;
  context.state.selectedTodo = {
    ...context.state.todos.find(todo => todo.id === id),
  } as Todo;
  context.state.currentPage = 'TodoEdit';
};
