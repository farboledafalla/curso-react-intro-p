import logo from './platzi.webp';
import './App.css';
import React from 'react';

// Componentes
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
   return (
      <React.Fragment>
         <TodoCounter complited={16} total={25} />
         <TodoSearch />

         <TodoList>
            <TodoItem />
            <TodoItem />
            <TodoItem />
         </TodoList>

         <CreateTodoButton />
      </React.Fragment>
   );
}

export default App;
