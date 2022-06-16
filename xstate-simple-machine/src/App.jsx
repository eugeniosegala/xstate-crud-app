import './App.css';
import { todosMachine } from './todosMachine';
import { useMachine } from '@xstate/react';
import { useState } from 'react';

function App() {
  const [newTodo, setCurrentTodo] = useState('');
  const [state, send] = useMachine(todosMachine);

  function handleAddTodo() {
    if (newTodo) {
      send('ADD_TODO', {
        todo: newTodo,
      });
      setCurrentTodo('');
    }
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      {state.context.todos.map((todo, index) => (
        <h2 key={index}>⭐️ {todo}</h2>
      ))}
      <input
        type="text"
        placeholder="Add new Todo"
        value={newTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button type="button" onClick={handleAddTodo}>Add todo</button>
    </div>
  );
}

export default App;
