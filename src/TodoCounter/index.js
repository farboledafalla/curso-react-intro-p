import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
   // Usaremos useContext() y le pasamos (Como si fuese una variable) el contexto que hemos creado
   const { completedTodos, totalTodos } = React.useContext(TodoContext);

   return (
      <>
         {totalTodos === completedTodos ? (
            <h1 className='TodoCounter'>
               Felicidades!!! has completado todos los TODOs
            </h1>
         ) : (
            <>
               {completedTodos === 0 ? (
                  <h1 className='TodoCounter'>Estas muy perezoso!!!</h1>
               ) : (
                  <h1 className='TodoCounter'>
                     Has completado <span>{completedTodos}</span> de{' '}
                     <span>{totalTodos}</span> TODOs
                  </h1>
               )}
            </>
         )}
      </>
   );
}

export { TodoCounter };
