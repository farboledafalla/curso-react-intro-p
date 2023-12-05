function TodoCounter({ total, complited }) {
   return (
      <h1>
         Has completado {complited} de {total} TODOs
      </h1>
   );
}

export { TodoCounter };
