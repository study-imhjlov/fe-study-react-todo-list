import React, { useState } from 'react';
import styled from 'styled-components';

const TodoCreate = ({ nextId, createTodo, incrementNextId }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleCreate = (e) => {
    if (value === '') {
      return;
    }
    createTodo({
      id: nextId,
      text: value,
      done: false,
    });
    incrementNextId();
    setValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleCreate();
  };

  return (
    <CreateContainer>
      <Input
        autoFocus
        placeholder="할 일을 등록 하세요."
        onChange={handleChange}
        value={value}
        onKeyPress={handleKeyPress}
      />
      <CreateBtn onClick={handleCreate}>추가</CreateBtn>
    </CreateContainer>
  );
};

export default TodoCreate;

const CreateContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #999999;
  border-radius: 10px;
  background-color: #fff;
  padding: 0 34px;
`;

const Input = styled.input`
  outline: none;
  font-size: 21px;
  &::placeholder {
    color: #999999;
    font-size: 18px;
  }
`;

const CreateBtn = styled.button`
  background-color: #000000;
  color: #ffffff;
  border-radius: 10px;
  padding: 6px 40px;
`;
