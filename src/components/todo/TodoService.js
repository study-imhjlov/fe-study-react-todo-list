/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

let initialTodos = [];
let nextIdState = 0;

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    nextIdState = nextIdState + 1;
  };

  const toggleTodo = (id) => {
    setTodoState(todoState.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const removeTodo = (id) => {
    setTodoState((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const createTodo = (todo) => {
    const nextId = nextIdState + 1;
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextId,
      }),
    );
  };

  const loadData = () => {
    let data = localStorage.getItem('todos') || '[]';
    initialTodos = JSON.parse(data);
    if (initialTodos && initialTodos.length >= 1) {
      nextIdState = initialTodos[initialTodos.length - 1].id;
      incrementNextId();
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem('todos', JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
