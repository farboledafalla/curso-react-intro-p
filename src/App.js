import React from 'react';

// Componentes
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// Todos por defecto
const defaultTodos = [
   {
      text: 'Cortar cebolla',
      completed: true,
   },
   {
      text: 'Tomar el curso de Intro a React.js',
      completed: false,
   },
   {
      text: 'Llorar con la llorona',
      completed: false,
   },
   {
      text: 'LALALALALALA',
      completed: true,
   },
];

function App() {
   const [searchValue, setSearchValue] = React.useState('');

   console.log('Los usuarios buscan Todos de: ' + searchValue);

   return (
      <>
         <TodoCounter complited={16} total={25} />
         <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
         />

         <TodoList>
            {
               // Mostrar los Todos del array
               defaultTodos.map((todo) => (
                  <TodoItem
                     key={todo.text}
                     text={todo.text}
                     completed={todo.completed}
                  />
               ))
            }
         </TodoList>

         <CreateTodoButton />
      </>
   );
}

export default App;
