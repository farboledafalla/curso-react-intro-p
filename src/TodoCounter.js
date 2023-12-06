function TodoCounter({ total, complited }) {
   return (
      <h1
         style={{
            fontSize: 24,
         }}
      >
         Has completado {complited} de {total} TODOs
      </h1>
   );
}

export { TodoCounter };
