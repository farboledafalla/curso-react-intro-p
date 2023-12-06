function TodoCounter({ total, complited }) {
   return (
      <h1
         style={{
            fontSize: '24px',
            textAlign: 'center',
            margin: 0,
            padding: '48px',
         }}
      >
         Has completado {complited} de {total} TODOs
      </h1>
   );
}

export { TodoCounter };
