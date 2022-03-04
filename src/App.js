import React, { useState } from 'react';
import Layout from 'components/Layout';
import TodoHead from 'components/head/TodoHead';
import ListService from 'components/listService/ListService';
import TodoContainer from 'components/todo/TodoContainer';

const App = () => {
  const [showTodo, setShowTodo] = useState(false);

  const handleFilterToggle = () => {
    setShowTodo(!showTodo);
  };

  return (
    <>
      <TodoHead />
      <Layout>
        <ListService handleFilterToggle={handleFilterToggle} showTodo={showTodo} />
        <TodoContainer showTodo={showTodo} />
      </Layout>
    </>
  );
};

export default App;
