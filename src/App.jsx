import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container, CssBaseline, Box } from '@mui/material';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Box sx={{ mt: 4 }}>
          <TodoForm />
          <TodoList />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
