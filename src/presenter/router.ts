import { Context } from './presenter';
import page from 'page';

export const initializeRouter = (context: Context) => {
  page.base('');

  page('/', () => page.show('/todos'));

  page('/todos', context.actions.displayTodos);

  page('/edit/:id', pageContext => {
    const id = (pageContext.params as Record<string, unknown>).id as string;
    return context.actions.displayEditTodo(id);
  });

  // page('*', () => {
  //   const appNode = window.document.querySelector('#app');
  //   if (appNode) {
  //     appNode.innerHTML = 'Not found!';
  //   }
  // });

  page.start();
};
