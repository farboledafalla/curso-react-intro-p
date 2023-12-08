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

   // Se recibe el texto que viene siendo el 'key' y este lo usaremos para encontrar el 'todo' dentro del Array
   const completeTodo = (text) => {
      // Oblener una compia del Array actual que está en el estado (todos)
      const newTodos = [...todos];
      /* Hallar el indice a modifivar 'todoIndex' y esto lo debemos hacer mediante un identificador único, para nuestro caso es <TodoItem key={todo.text} /> */
      // Para ello necesitamos cual es ese identificador en esta función y la recibiremos como argumento ''const completeTodo = (text) => {}'
      // No solo puedo encontrar el elemento, sino también el indice usando 'findIndex'
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      // Saber cual elemento modificar, definiremos la posición del elemento a actualizar como  'todoIndex' y actualizar 'completed=true'
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      /* Hallar el todo que fue marcado como realizado, marcar la propiedad 'todos.completed' en 'true', crear un nuevo Array (newTodos) y enviarselo a la función modificadora del estado (setTodos) para que ahora muestre los (todos) actualizados */
      setTodos(newTodos);
   };

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
               // Mostrar los Todos que coinciden con la búsqueda
               searchedTodos.map((todo) => (
                  <TodoItem
                     key={todo.text}
                     text={todo.text}
                     completed={todo.completed}
                     onComplete={() => completeTodo(todo.text)}
                  />
               ))
            }
         </TodoList>

         <CreateTodoButton />
      </>
   );
}

export default App;
