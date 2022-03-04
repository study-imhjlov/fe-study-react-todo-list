import React from 'react';
import styled from 'styled-components';

const Layout = (props) => {
  return <LayoutBlock>{props.children}</LayoutBlock>;
};

export default Layout;

const LayoutBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 92px;
`;
