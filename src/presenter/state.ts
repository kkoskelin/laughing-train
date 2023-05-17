import { State } from '../types/State';
import { derivedStateFunctions } from './derivedStateFunctions';

export const state: State = {
  currentPage: '',
  shouldHideChecked: false,
  todos: [],
  ...derivedStateFunctions,
};
