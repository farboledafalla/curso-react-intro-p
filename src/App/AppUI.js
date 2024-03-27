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
   return (
      <>
         {/* Pasamos la cantidad completada (completedTodos) y el total de todos */}
         <TodoCounter />
         <TodoSearch />

         <TodoContext.Consumer>
            {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
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
                  {!loading && searchedTodos === 0 && <EmptyTodos />}

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
            )}
         </TodoContext.Consumer>

         <CreateTodoButton />
      </>
   );
}

export { AppUI };
