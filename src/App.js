import React from 'react';
import { TodoLista } from  './TodoLista';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoLista />
    </React.Fragment>    
  );
}

export default App;
