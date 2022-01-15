import React from 'react';
import logo from './logo.svg';
import FoodBox from './foodbox/FoodBox';
import "bulma/css/bulma.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IronNutrition</h1>
        <FoodBox />
      </header>
    </div>
  );
}

export default App;
