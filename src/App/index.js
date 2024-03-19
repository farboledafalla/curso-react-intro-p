import React, { useEffect } from 'react';

// Componentes
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// Todos por defecto
// const defaultTodos = [
//    {
//       text: 'Cortar cebolla',
//       completed: true,
//    },
//    {
//       text: 'Tomar el curso de Intro a React.js',
//       completed: false,
//    },
//    {
//       text: 'Llorar con la llorona',
//       completed: false,
//    },
//    {
//       text: 'LALALALALALA',
//       completed: true,
//    },
//    {
//       text: 'Usar estados derivados',
//       completed: true,
//    },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.getItem('TODOS_V1');
// localStorage.removeItem('TODOS_V1');

function App() {
   //let parsedTodos = JSON.parse(localStorageTodos);

   // Estado para manejar los todos y lo inicializamos con el array de todos
   const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
   const [searchValue, setSearchValue] = React.useState('');

   //Estados derivados
   // Usamos la doble negación para asegurarnos que se retorne un booleano, si lo que tiene es cualquier valor
   // diferente de cero, puede ser un string, un número, lo que sea.
   // Cuenta lo que tienen todo.completed = true
   const completedTodos = todos.filter((todo) => !!todo.completed).length;
   const totalTodos = todos.length;

   console.log('Log 1');

   // Lo que encapsulemos dentro de un useEffect() se ejecuta de último, si el segundo parámetro es un ARRAY vacío - se ejecuta solo al recargar la página la primera vez. Si el ARRAY contienen estados, este ARROW FUNCTION se ejecuta cuando cambie uno de los estados contenidos en dicho ARRAY.
   useEffect(() => {
      console.log('Loooog 2');
   }, [searchValue]);

   console.log('Log 3');

   const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
   });

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
      saveTodos(newTodos);
   };

   const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
   };

   return (
      <AppUI
         completedTodos={completedTodos}
         totalTodos={totalTodos}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
         searchedTodos={searchedTodos}
         completeTodo={completeTodo}
         deleteTodo={deleteTodo}
      />
   );
}

export default App;
