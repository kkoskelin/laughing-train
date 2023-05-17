import express, { Express } from 'express';

const app: Express = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 200, 404
app.get('/api/todo', () => {
  console.log('get all todos');
});

// 201, 400
app.post('/api/todo', () => {
  console.log('create a todo');
});

// 204, 404
app.delete('/api/todo/:id', () => {
  console.log('delete a todo');
});

// 200, 400, 404
app.put('/api/todo/:id', () => {
  console.log('update a specific todo');
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
