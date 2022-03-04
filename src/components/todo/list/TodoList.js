import React from 'react';
import styled from 'styled-components';
import TodoItem from 'components/todo/list/item/TodoItem';
import { TODO_STATUS } from 'utils/constants';

const TodoList = ({ status, toggleTodo, removeTodo, todos }) => {
  const showTodo = () => {
    const filteredList =
      todos &&
      todos.filter((todo) =>
        status === TODO_STATUS.CREATED ? todo.done === false : todo.done === true,
      );
    return filteredList;
  };

  return (
    <TodoListBlock>
      <TitleSpan>{status === 'CREATED' ? '등록된 할 일' : '완료된 할 일'}</TitleSpan>
      {[...showTodo()].map((todo) => (
        <TodoItem toggleTodo={toggleTodo} removeTodo={removeTodo} key={todo.id} todo={todo} />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;

const TodoListBlock = styled.div`
  margin: 23px 0 39px;
`;

const TitleSpan = styled.div`
  font-size: 18px;
  margin-bottom: 25px;
`;
