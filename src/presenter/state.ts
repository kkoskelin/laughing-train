export type State = {
  randomInfo?: Record<string, string>;
  currentPage: string;
  todos?: Todo[];
};

export type Link = {
  href: string;
  name: string;
  current?: boolean;
};

export type Todo = {
  id: string;
  detail: string;
  createdTimestamp?: string;
  completedTimestamp?: string;
};

export const state: State = {
  currentPage: '',
  todos: [
    {
      completedTimestamp: '2022-03-02',
      createdTimestamp: '2022-01-02',
      detail: 'Make a list',
      id: '1',
    },
    { detail: 'Get a box', id: '2' },
    { detail: 'Cut a hole in it', id: '3' },
  ],
};
