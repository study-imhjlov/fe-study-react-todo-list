import React from 'react';
import styled from 'styled-components';

const TodoContainer = (props) => {
  return <TodoContainerBlock>{props.children}</TodoContainerBlock>;
};

export default TodoContainer;

const TodoContainerBlock = styled.div`
  border: 1px solid red;
`;
