import { overmindApp } from '../presenter';

const { actions, state } = overmindApp;

describe('displayTodos', () => {
  it('sets current page to Todos from Loading page', () => {
    actions.displayLoading();
    expect(state.currentPage).toBe('Loading');
    actions.displayTodos();
    expect(state.currentPage).toBe('TodoList');
  });
});
