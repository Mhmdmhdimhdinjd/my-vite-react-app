import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { List, Box } from '@mui/material';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
      <List sx={{ width: '80%' }}>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
