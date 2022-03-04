import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckBox } from 'assets/checkbox_empty.svg';
import { ReactComponent as Checked } from 'assets/checkbox_todo.svg';
import { ReactComponent as DeleteBtn } from 'assets/delete.svg';

const TodoItem = ({ toggleTodo, removeTodo, todo }) => {
  const done = todo.done;

  const handleComplete = () => {
    toggleTodo(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <TodoItemBlock>
      {done ? <Checked onClick={handleComplete} /> : <CheckBox onClick={handleComplete} />}
      <Text done={done}>{todo.text}</Text>
      <DeleteBtn onClick={handleRemove} />
    </TodoItemBlock>
  );
};

export default TodoItem;

const TodoItemBlock = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #999999;
  border-radius: 10px;
  background-color: #fff;
  padding: 0 34px;
  margin-bottom: 12px;
`;

const Text = styled.div`
  flex: 1;
  font-size: 18px;
  margin-left: 18px;
  ${(props) =>
    props.done &&
    css`
      color: #999;
      text-decoration: line-through;
    `}
`;
