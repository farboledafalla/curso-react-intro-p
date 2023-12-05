import logo from './platzi.webp';
import './App.css';

// Componentes
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
   return (
      <div className='App'>
         <TodoCounter />
         <TodoSearch />

         <TodoList>
            <TodoItem />
            <TodoItem />
            <TodoItem />
         </TodoList>

         <CreateTodoButton />

         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edita el archivo <code>src/App.js</code> y guarda para recargar.
            </p>
            <a
               className='App-link'
               href='https://platzi.com/reactjs'
               target='_blank'
               rel='noopener noreferrer'
            >
               Aprendamos React
            </a>
         </header>
      </div>
   );
}

export default App;
