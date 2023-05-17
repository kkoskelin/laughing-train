import { Todo } from '../../types/Todo';
import { overmindApp } from '../presenter';
const { actions, effects, state } = overmindApp;

describe('displayTodos', () => {
  const mockTodos: Todo[] = [
    {
      createdTimestamp: '2022-02-02T02:22:12',
      detail: 'some thing to do',
      id: '9',
    },
  ];
  beforeAll(() => {
    effects.todoGateway.getAll = jest.fn().mockReturnValue(mockTodos);
  });
  it('sets current page to Todos from Loading page', async () => {
    actions.displayLoading();
    expect(state.currentPage).toBe('Loading');
    await actions.displayTodos();
    expect(state.todos).toEqual(mockTodos);
    expect(state.currentPage).toBe('TodoList');
  });
});
