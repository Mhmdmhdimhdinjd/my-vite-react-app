import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="toggle" onClick={() => dispatch(toggleTodo(index))}>
            <CheckIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => dispatch(removeTodo(index))}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={todo.text} />
    </ListItem>
  );
};

export default TodoItem;
