import { Context } from '../presenter';

export const toggleChecked = (context: Context, id: string) => {
  const itemToToggle = context.state.todos.find(todo => todo.id === id);
  if (itemToToggle) {
    itemToToggle.completedTimestamp = itemToToggle.completedTimestamp
      ? undefined
      : new Date().toISOString();
  }
  context.state.currentPage = 'TodoList';
};
