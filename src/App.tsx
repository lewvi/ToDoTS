import React, { useState } from 'react';
import './App.css';
import InputForm from './component/inputForm';
import TodoList from './component/TodoList';
import { Todo } from './models/model';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos)

  return (
    <div className="App">
      <span className="App-header">To Do List</span>
      <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App

