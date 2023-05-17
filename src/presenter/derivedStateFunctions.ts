import { State } from '../types/State';
import { Todo } from '../types/Todo';
import { derived } from 'overmind';
import sortBy from 'lodash/sortBy';

const todoIsComplete = (todo: Todo) => todo.completedTimestamp !== undefined;
const todoIsIncomplete = (todo: Todo) => todo.completedTimestamp == undefined;

const sortTodos = (todos: Todo[]) =>
  sortBy<Todo>(todos, ['completionDate', 'creationDate']).reverse();

export const getCompletedTodos = (state: State): Todo[] => {
  return sortTodos(state.todos.filter(todoIsComplete));
};

export const getIncompleteTodos = (state: State): Todo[] => {
  return sortTodos(state.todos.filter(todoIsIncomplete));
};

export const derivedStateFunctions = {
  completedTodos: derived(getCompletedTodos),
  incompleteTodos: derived(getIncompleteTodos),
};
