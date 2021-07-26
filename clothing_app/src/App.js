import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import {Switch ,  Route} from 'react-router-dom';

const HatsPage =()=>(
  <div>
    <h1>HATS</h1>
  </div>
);
function App() {
  return (
    <div>
      <Route exact path='/' component ={HomePage} />
      <Route exact path='/hats' component ={HatsPage} />
    </div>
  );
}

export default App;
