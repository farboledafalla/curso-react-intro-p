import './TodoCounter.css';

function TodoCounter({ total, complited }) {
   return (
      <>
         {total === complited ? (
            <h1 className='TodoCounter'>
               Felicidades!!! has completado todos los TODOs
            </h1>
         ) : (
            <>
               {complited === 0 ? (
                  <h1 className='TodoCounter'>Estas muy perezoso!!!</h1>
               ) : (
                  <h1 className='TodoCounter'>
                     Has completado <span>{complited}</span> de{' '}
                     <span>{total}</span> TODOs
                  </h1>
               )}
            </>
         )}
      </>
   );
}

export { TodoCounter };
