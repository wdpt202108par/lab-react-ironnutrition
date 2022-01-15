import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';

import json from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/Addfood';


function App() {
  return (

    

    <div className="App">
    <h1>Let's see our foodbox</h1>
    <AddFood addTheFood={this.addTheFood} />
    
    {json.map( (el) => {
      return (<Foodbox key={el.name} image={el.image} name={el.name} calories={el.calories} quantity={el.quantity}/>)
    })

    }


    
    </div>
  );
}

export default App;
