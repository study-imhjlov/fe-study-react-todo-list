import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchBtn } from 'assets/search.svg';

//todo 검색
//검색과 등록 input이 겹치니 나중에 합치면 좋을듯
const Search = () => {
  return (
    <SearchContainer>
      <input />
      <SearchBtn />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  border: 1px solid red;
`;
