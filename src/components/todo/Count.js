import React from 'react';
import styled from 'styled-components';

const Count = ({ todos }) => {
  return (
    <CountContainer>
      <CountTitle>📝 전체 할 일</CountTitle>
      <CountSpan>{todos.filter((todo) => todo.done === false).length}</CountSpan>
    </CountContainer>
  );
};

export default Count;

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

const CountTitle = styled.span`
  font-size: 24px;
  margin-right: 38px;
`;
const CountSpan = styled.span`
  font-size: 24px;
`;
