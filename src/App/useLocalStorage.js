import React, { useEffect, useState } from 'react';

// Debemos exportar la función 'saveTodos()' para que las funciones que la consumen puedan hacerlo
function useLocalStorage(itemName, initialValue) {
   // ESTO YA NO: Una vez confirmada la existencia del origen de los datos, podemos inicializar el estado
   // Ahora vamos a inicializar nuestro estado con 'initialValue' mientras carga el localStorage
   const [item, setItem] = React.useState(initialValue);

   // Nuevo estado para indicarle a la aplicación si apenas estamos cargando o no la información
   // Lo inicializamos en 'true' indicando que si...apenas estamos cargando la información
   const [loading, setLoading] = useState(true);

   // Nuevo estado para indicarle a la aplicación que aun no hay error
   // Lo inicializamos en 'false' indicando que no hay error al iniciar
   const [error, setError] = useState(false);

   // Manejar el localStorage con useEffect()
   useEffect(() => {
      setTimeout(() => {
         try {
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
               setItem(parsedItem);
            }

            // Ya no está cargando
            setLoading(false);
         } catch (error) {
            // Actualizamos el estado del error
            setError(true);
            // Cancelar el estado de carga
            setLoading(false);
         }
      }, 2000);
   }, []);

   // Recibo el nuevo Array de TODOS y los guardo en el estado y en localStorage
   const saveItem = (newItem) => {
      // localStorage
      localStorage.setItem(itemName, JSON.stringify(newItem));
      // Estado
      setItem(newItem);
   };

   // Cuando se retorna más de un elemento, se debe hacer mediante un obketo
   // return [item, saveItem, loading, error];
   return {
      item,
      saveItem,
      loading,
      error,
   };
}

export { useLocalStorage };
