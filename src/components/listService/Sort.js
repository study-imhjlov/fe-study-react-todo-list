import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DropdownBtn } from 'assets/triangle.svg';

const Sort = () => {
  return (
    <SortContainer>
      <DropdownBody>
        <span>완료일순</span>
        <DropdownBtn />
      </DropdownBody>
      <DropdownMenu />
    </SortContainer>
  );
};

export default Sort;

const SortContainer = styled.div`
  margin: 0 40px 0 30px;
`;
const DropdownBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 45px;
  background-color: #f3f3f3;
  border-radius: 10px;
`;
const DropdownMenu = styled.div``;
