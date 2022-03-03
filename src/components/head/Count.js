import React from 'react';
import styled from 'styled-components';

//완료하지 않은 todo 개수
const Count = () => {
  return (
    <CountContainer>
      <CountSpan> 전체 할 일</CountSpan>
    </CountContainer>
  );
};

export default Count;

const CountContainer = styled.div`
  border: 1px solid red;
`;
const CountSpan = styled.span`
  border: 1px solid red;
`;
