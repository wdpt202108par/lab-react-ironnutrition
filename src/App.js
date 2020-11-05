import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';

import json from './foods.json';

import Foodbox from './components/Foodbox'

function App() {
  return (
    <div className="App">
      {json.map(food => (
        <Foodbox key={food.name} name={food.name} image={food.image} calories={food.calories} />
      ))}
      
    </div>
  );
}

export default App;
