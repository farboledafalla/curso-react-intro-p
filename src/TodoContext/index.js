import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

// 1. Le damos un nombre más diciente (TodoProvider)
function TodoProvider({ children }) {
   // 3. Podemos encapsular toda la lógica de nuestra aplicación
   //let parsedTodos = JSON.parse(localStorageTodos);

   // Estado para manejar los todos y lo inicializamos con el array de todos
   // Ahora recibimos un objeto y no un ARRAY, porque son más de 2 elementos retornados
   // Debemos recibir item y no todos, saveItem y no saveTodos, esto nos genera error porque esas variables no las usamos aquí, entonces renombramos las propiedades recibidas
   const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
   } = useLocalStorage('TODOS_V1', []);

   const [searchValue, setSearchValue] = React.useState('');

   // Estado para mostrar u ocultar el modal de <CreateTodoBurton />
   const [openModal, setOpenModal] = React.useState(false);
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

   // Función que agregará el nuevo TODO
   const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
         text,
         completed: false,
      });
      saveTodos(newTodos);
   };

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
      <TodoContext.Provider
         value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
         }}
      >
         {children}
      </TodoContext.Provider>
   );
}

// Debe existir un Provider y un Consumer
// Esto no lo hacemos así directamente...vamos a crear nuestro propio 'Provider'
{
   /* <TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer> */
}

// 2. Debemos exportar nuestro TodoProvieder
export { TodoContext, TodoProvider };
