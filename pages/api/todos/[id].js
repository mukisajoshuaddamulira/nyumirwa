import { todos } from './todos';

export default function handler(req, res) {
  const { id } = req.query;
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  if (req.method === 'GET') {
    res.status(200).json(todo);
  } else if (req.method === 'PUT') {
    const { text, completed } = req.body;
    if (text !== undefined) {
      todo.text = text;
    }
    if (completed !== undefined) {
      todo.completed = completed;
    }
    res.status(200).json(todo);
  } else if (req.method === 'DELETE') {
    const index = todos.findIndex((todo) => todo.id === parseInt(id));
    todos.splice(index, 1);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
