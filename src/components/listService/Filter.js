import React from 'react';
import styledComponents from 'styled-components';
import { ReactComponent as CheckboxEmpty } from 'assets/checkbox_empty.svg';
import { ReactComponent as Checkbox } from 'assets/checkbox_filter.svg';

const Filter = () => {
  return (
    <FilterContainer>
      {true ? <CheckboxEmpty /> : <Checkbox />}
      <FilterSpan>완료된 할 일 포함</FilterSpan>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styledComponents.div`
  border: 1px solid red;
`;
const FilterSpan = styledComponents.span`
  border: 1px solid red;
`;
