import React from 'react';
import styled from 'styled-components';

const Layout = (props) => {
  return <LayoutBlock>{props.children}</LayoutBlock>;
};

export default Layout;

const LayoutBlock = styled.div`
  border: 1px solid red;
`;
