import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';

import foods from './foods.json';
import Foodbox from './components/Foodbox';



function App() {
  return (
    <div className="App">
    <h1>Let's see our foodbox</h1>
    
    {foods.map( (el) => {
      return (<Foodbox image={el.image} name={el.name} calories={el.calories} quantity={el.quantity}/>)
    })

    }
    
    </div>
  );
}

export default App;
