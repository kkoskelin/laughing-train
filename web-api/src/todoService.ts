import { Todo } from '../../src/types/Todo';

const todoFakeList: Todo[] = [
  { createdTimestamp: new Date().toString(), detail: 'a thing', id: '7' },
  { createdTimestamp: new Date().toString(), detail: 'a thing 2', id: '256' },
  { createdTimestamp: new Date().toString(), detail: 'a thing 8', id: '42' },
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
