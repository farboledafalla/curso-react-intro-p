import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI() {
   const { loading, error, searchedTodos, completeTodo, deleteTodo } =
      React.useContext(TodoContext);

   return (
      <>
         {/* Pasamos la cantidad completada (completedTodos) y el total de todos */}
         <TodoCounter />
         <TodoSearch />

         <TodoList>
            {loading && (
               <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
               </>
            )}
            {error && <TodosError />}

            {/* Si no estamos cargando y no hay TODO's */}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {
               // Mostrar los Todos que coinciden con la búsqueda
               searchedTodos.map((todo) => (
                  <TodoItem
                     key={todo.text}
                     text={todo.text}
                     completed={todo.completed}
                     onComplete={() => completeTodo(todo.text)}
                     onDelete={() => deleteTodo(todo.text)}
                  />
               ))
            }
         </TodoList>

         <CreateTodoButton />
      </>
   );
}

export { AppUI };
