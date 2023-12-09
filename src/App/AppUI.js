import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
   completedTodos,
   totalTodos,
   searchValue,
   setSearchValue,
   searchedTodos,
   completeTodo,
   deleteTodo,
}) {
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
