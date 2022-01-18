import React from 'react';
import FoodList from './foodlist/FoodList';
import "bulma/css/bulma.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IronNutrition</h1>
        <FoodList />
      </header>
    </div>
  );
}

export default App;
