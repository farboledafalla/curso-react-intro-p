import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

// Arreglo con los tipos a renderizar
const iconTypes = {
   check: (color) => <CheckSVG className='Icon-svg' fill={color} />,
   delete: (color) => <DeleteSVG className='Icon-svg' fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
   // Se renderiza el componente que sea el valor de la lleve pasada en 'iconTypes[type]'
   return (
      <span
         className={`Icon-container Icon-container-${type}`}
         onClick={onClick}
      >
         {' '}
         {iconTypes[type](color)}
      </span>
   );
}

export { TodoIcon };
