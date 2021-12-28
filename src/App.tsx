import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Poker } from './components/poker/poker';
import { CtwoCom } from './components/ctwo-com/ctwo-com';

function App() {
  return (
    <div>
      <Poker></Poker>
      <CtwoCom></CtwoCom>
    </div>
  );
}

export default App;
