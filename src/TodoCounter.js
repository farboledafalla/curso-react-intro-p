const estilos = {
   backgroundColor: 'red',
};

function TodoCounter({ total, complited }) {
   return (
      <h1 style={estilos}>
         Has completado {complited} de {total} TODOs
      </h1>
   );
}

export { TodoCounter };
