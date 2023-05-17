import { Context } from '../presenter';

export const hideChecked = (context: Context) => {
  context.state.shouldHideChecked = !context.state.shouldHideChecked;
};
