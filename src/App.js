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
   {
      text: 'Usar estados derivados',
      completed: true,
   },
];

function App() {
   // Estado para manejar los todos y lo inicializamos con el array de todos
   const [todos, setTodos] = React.useState(defaultTodos);
   const [searchValue, setSearchValue] = React.useState('');

   //Estados derivados
   // Usamos la doble negación para asegurarnos que se retorne un booleano, si lo que tiene es cualquier valor
   // diferente de cero, puede ser un string, un número, lo que sea.
   // Cuenta lo que tienen todo.completed = true
   const completedTodos = todos.filter((todo) => !!todo.completed).length;
   const totalTodos = todos.length;
   const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
   });

   console.log('Los usuarios buscan Todos de: ' + searchValue);

   return (
      <>
         {/* Pasamos la cantidad completada (completedTodos) y el total de todos */}
         <TodoCounter complited={completedTodos} total={totalTodos} />
         <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
         />

         <TodoList>
            {
               // Mostrar los Todos del array
               searchedTodos.map((todo) => (
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
