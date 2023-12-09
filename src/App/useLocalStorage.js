import React from 'react';

// Debemos exportar la función 'saveTodos()' para que las funciones que la consumen puedan hacerlo
function useLocalStorage(itemName, initialValue) {
   // Primero definimos la existencia del origen para poder inicializar el estado
   const localStorageItem = localStorage.getItem(itemName);

   let parsedItem;

   /* Si el localStorage no trae algo, es decir, que no existe, debemos inicializarlo vacio tanto en la aplicación como en el localStorage */
   if (!localStorageItem) {
      // Se inicializa en el localStorage
      const emptyItem = JSON.stringify(initialValue);
      localStorage.setItem(itemName, emptyItem);
      // Se inicializa en la aplicacion
      parsedItem = initialValue;
   } else {
      parsedItem = JSON.parse(localStorageItem);
   }

   // Una vez confirmada la existencia del origen de los datos, podemos inicializar el estado
   const [item, setItem] = React.useState(parsedItem);

   // Recibo el nuevo Array de TODOS y los guardo en el estado y en localStorage
   const saveItem = (newItem) => {
      // localStorage
      localStorage.setItem(itemName, JSON.stringify(newItem));
      // Estado
      setItem(newItem);
   };

   return [item, saveItem];
}

export { useLocalStorage };
