import React from 'react';
import Layout from 'components/Layout';
import TodoHead from 'components/head/TodoHead';
import ListService from 'components/listService/ListService';
import TodoContainer from 'components/todo/TodoContainer';

const App = () => {
  return (
    <Layout>
      <TodoHead />
      <ListService />
      <TodoContainer />
    </Layout>
  );
};

export default App;
