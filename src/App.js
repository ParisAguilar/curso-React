import React from 'react';
import './App.css';
import './index';
import Calculadora from './components/calculadora';
import Calculadora1 from './components/calculadora1';

function App() {
  
  return (
    <div className="App">      
      <Calculadora1/>
      <hr />
      <Calculadora number={3}/>
      <Calculadora number={4}/>
      <Calculadora number={5}/>
      <Calculadora number={6}/>
      <Calculadora number={7}/>
      <Calculadora number={8}/>
      <Calculadora number={9}/>
      <Calculadora number={0}/>
    </div>
  );
} 
export default App;