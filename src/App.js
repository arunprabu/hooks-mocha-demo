import React from 'react';
import './App.css';
import Profile from './components/Profile';
import UserData from './components/UserData';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>Hooks Demo </h1>
      <Profile></Profile>

      <UserData></UserData>

      <Todo></Todo>
    </div>
  );
}

export default App;
