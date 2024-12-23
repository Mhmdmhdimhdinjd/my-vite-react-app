import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addTodo({
      text: value,
      completed: false
    }));
    setValue('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <TextField
        label="Add a new task"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{ mr: 1, width: '300px' }}
      />
      <Button type="submit" variant="contained" color="primary">Add</Button>
    </Box>
  );
};

export default TodoForm;
