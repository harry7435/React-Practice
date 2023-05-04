import { useState } from 'react';
import './App.css';
import Divider from './Divder/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';

function App() {
  const [text, setText] = useState('');
  return (
    <main className="App">
      <TodoHeader />
      <TodoInput text={text} />
      <TodoListTools />
      <Divider />
      <TodoList />
    </main>
  );
}

export default App;
