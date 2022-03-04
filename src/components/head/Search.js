import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchBtn } from 'assets/search.svg';

//todo 검색
//검색과 등록 input이 겹치니 나중에 합치면 좋을듯
const Search = () => {
  return (
    <SearchContainer>
      <Input autoFocus placeholder="할 일 검색" />
      <SearchBtn />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 50%;
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
