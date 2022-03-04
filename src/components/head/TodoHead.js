import React from 'react';
import styledComponents from 'styled-components';
import Search from 'components/head/Search';

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <Search />
    </TodoHeadBlock>
  );
};

export default TodoHead;

const TodoHeadBlock = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width : 100%;
  height : 130px;
  background-color: #FFF;
  box-shadow: 0 4px 4px #999999;
  padding: 0 92px;
`;
