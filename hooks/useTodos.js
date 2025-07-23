import { useState, useEffect } from 'react';

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const data = await res.json();
    setTodos([...todos, data]);
  };

  const updateTodo = async (id, data) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const updatedTodo = await res.json();
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, updateTodo, deleteTodo };
};

export default useTodos;
