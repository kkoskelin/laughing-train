import { Todo } from './Todo';

export type State = {
  completedTodos: Todo[];
  currentPage: string;
  selectedTodoId?: string;
  selectedTodo?: Todo;
  incompleteTodos: Todo[];
  shouldHideChecked: boolean;
  todos: Todo[];
};
