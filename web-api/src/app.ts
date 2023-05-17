import { BadRequestError, NotFoundError } from '../../src/errors';
import { Todo } from '../../src/types/Todo';
import { todoService } from './todoService';
import bodyparser from 'body-parser';
import express, { Express, Response } from 'express';

const app: Express = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const exceptionHandler = (e: Error, res: Response) => {
  if (e instanceof BadRequestError) {
    res.status(400);
  } else if (e instanceof NotFoundError) {
    res.status(404);
  } else {
    res.status(500);
  }
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 200
app.get('/api/todo', (req, res) => {
  const todos = todoService.get();
  res.json(todos);
});

// 201, 400
app.post('/api/todo', (req, res) => {
  try {
    todoService.create(req.body as Todo);
    res.status(201);
  } catch (e) {
    exceptionHandler(e as Error, res);
  }
});

// 204, 404
app.delete('/api/todo/:id', (req, res) => {
  res.send('delete a todo');
  try {
    todoService.delete(req.params.id);
    res.status(204);
  } catch (e) {
    exceptionHandler(e as Error, res);
  }
});

// 200, 400, 404
app.put('/api/todo/:id', (req, res) => {
  res.send('update a todo');
  try {
    const updatedTodo = todoService.update(req.params.id, req.body as Todo);
    res.status(204);
    res.send(updatedTodo);
  } catch (e) {
    exceptionHandler(e as Error, res);
  }
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
