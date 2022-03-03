import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DropdownBtn } from 'assets/triangle.svg';

const Sort = () => {
  return (
    <SortContainer>
      <DropdownBody>
        <DropdownBtn />
      </DropdownBody>
      <DropdownMenu />
    </SortContainer>
  );
};

export default Sort;

const SortContainer = styled.div`
  border: 1px solid red;
`;
const DropdownBody = styled.div`
  border: 1px solid red;
`;
const DropdownMenu = styled.div`
  border: 1px solid red;
`;
