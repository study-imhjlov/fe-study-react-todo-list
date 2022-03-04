import React from 'react';
import styledComponents from 'styled-components';
import { ReactComponent as CheckboxEmpty } from 'assets/checkbox_empty.svg';
import { ReactComponent as Checkbox } from 'assets/checkbox_filter.svg';

const Filter = ({ handleFilterToggle, showTodo }) => {
  return (
    <FilterContainer>
      {showTodo ? (
        <Checkbox onClick={handleFilterToggle} />
      ) : (
        <CheckboxEmpty onClick={handleFilterToggle} />
      )}
      <FilterSpan>완료된 할 일 포함</FilterSpan>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilterSpan = styledComponents.span`
  font-size : 18px;
  margin-left : 18px;
`;
