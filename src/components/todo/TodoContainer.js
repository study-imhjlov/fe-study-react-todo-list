import React from 'react';
import styled from 'styled-components';
import { useTodo } from 'components/todo/TodoService';
import TodoCreate from 'components/todo/create/TodoCreate';
import Count from 'components/todo/Count';
import TodoList from 'components/todo/list/TodoList';
import { TODO_STATUS } from 'utils/constants';

const TodoContainer = ({ showTodo }) => {
  const { todoState, nextIdState, incrementNextId, toggleTodo, removeTodo, createTodo } = useTodo();
  return (
    <TodoContainerBlock>
      <TodoCreate nextId={nextIdState} createTodo={createTodo} incrementNextId={incrementNextId} />
      <Count todos={todoState} />
    </TodoContainerBlock>
  );
};

export default TodoContainer;

const TodoContainerBlock = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: 0 4px 4px #999999;
  padding: 30px 40px;
  margin-bottom: 52px;
`;
