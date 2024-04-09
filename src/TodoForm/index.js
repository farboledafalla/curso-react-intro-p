import React, { useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
   const { addTodo, setOpenModal } = React.useContext(TodoContext);

   // Estado para guardar nombre del nuevo TODO
   const [newTodoValue, setNewTodoValue] = useState('');

   // Función para manejar la lógica del formulario
   const onSubmit = (event) => {
      // Evitat que se recargue la página al darle click en los botones
      event.preventDefault();
      // Enviar el nuevo TODO
      addTodo(newTodoValue);
      // Cerrar el formulario
      setOpenModal(false);
   };

   const onCancel = (event) => {
      setOpenModal(false);
   };

   const onChange = (event) => {
      setNewTodoValue(event.target.value);
   };

   return (
      <form onSubmit={onSubmit}>
         <label>Escribe tu nuevo TODO</label>
         <textarea
            placeholder='Cortar cebolla para el almuerzo'
            value={newTodoValue}
            onChange={onChange}
         />
         <div className='TodoForm-buttonContainer'>
            <button
               type='button'
               className='TodoForm-button TodoForm-button--cancel'
               onClick={onCancel}
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
