import React from 'react';
import styledComponents from 'styled-components';
import Filter from 'components/listService/Filter';
import Sort from 'components/listService/Sort';

const ListService = ({ handleFilterToggle, showTodo }) => {
  return (
    <ListServiceBlock>
      <Sort />
      <Filter handleFilterToggle={handleFilterToggle} showTodo={showTodo} />
    </ListServiceBlock>
  );
};

export default ListService;

const ListServiceBlock = styledComponents.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width : 100%;
  margin : 30px 0 42px ;
`;
