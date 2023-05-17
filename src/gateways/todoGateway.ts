import { Todo } from '../types/Todo';
import { httpGateway } from './httpGateway';
const baseUrl = 'http://localhost:3000/api';

export const getAll = async (): Promise<Todo[]> => {
  const results = await httpGateway.get(`${baseUrl}/todo`);
  return results as Todo[];
};

export const todoGateway = { getAll };
