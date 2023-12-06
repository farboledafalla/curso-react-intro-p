import './TodoCounter.css';

function TodoCounter({ total, complited }) {
   return (
      <h1 className='TodoCounter'>
         Has completado <span>{complited}</span> de <span>{total}</span> TODOs
      </h1>
   );
}

export { TodoCounter };
