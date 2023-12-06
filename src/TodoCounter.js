function TodoCounter({ total, complited }) {
   return (
      <h1
         style={{
            backgroundColor: 'red',
         }}
      >
         Has completado {complited} de {total} TODOs
      </h1>
   );
}

export { TodoCounter };
