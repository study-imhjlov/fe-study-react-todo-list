import React from 'react';
import styled from 'styled-components';

const TodoCreate = () => {
  return (
    <CreateContainer>
      <input />
      <CreateBtn />
    </CreateContainer>
  );
};

export default TodoCreate;

const CreateContainer = styled.span`
  border: 1px solid red;
`;

const CreateBtn = styled.button`
  border: 1px solid red;
`;
