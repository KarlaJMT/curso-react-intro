import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';
import React from 'react';

const defaultTodos = [
  { text: 'Ver TVD', completed: false },
  { text: 'Ver TO', completed: false },
  { text: 'Hacer Platzi', completed: true },
  { text: 'Encontrar LA canción', completed: false },
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {/* Se renderiza un TodoItem dentro de la sección de ToDo's */}
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoBtn />

    </React.Fragment>
  );
}



export default App;
