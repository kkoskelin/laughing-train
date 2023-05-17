import { Todo } from '../../src/types/Todo';

const todoFakeList: Todo[] = [
  { createdTimestamp: '2011-11-14T15:28:46.493Z', detail: 'a thing', id: '7' },
  {
    createdTimestamp: '2018-02-09T12:38:46.493Z',
    detail: 'a thing 2',
    id: '256',
  },
  {
    completedTimestamp: '2021-08-13T21:42:46.493Z',
    createdTimestamp: '2023-05-29T12:58:46.493Z',
    detail: 'a thing 8',
    id: '42',
  },
];

const get = () => {
  return todoFakeList;
};

export const todoService = {
  create: (todo: Todo): void => {
    // do a thing
  },
  delete: (id: string) => {
    return;
  },
  get,
  update: (id: string, todo: Todo): Todo => todo,
};
