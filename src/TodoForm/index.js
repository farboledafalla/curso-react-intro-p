import React from 'react';
import './TodoForm.css';

function TodoForm() {
   return (
      <form
         onSubmit={(event) => {
            // Evitat que se recargue la página al darle click en los botones
            event.preventDefault();
         }}
      >
         <label>Escribe tu nuevo TODO</label>
         <textarea placeholder='Cortar cebolla para el almuerzo' />
         <div className='TodoForm-buttonContainer'>
            <button
               type='button'
               className='TodoForm-button TodoForm-button--cancel'
            >
               Cancelar
            </button>
            <button
               type='submit'
               className='TodoForm-button TodoForm-button--add'
            >
               Añadir
            </button>
         </div>
      </form>
   );
}

export { TodoForm };
