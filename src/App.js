import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';

import json from './foods.json';

import Foodbox from './components/Foodbox'
import AddFood from './components/AddFood'


class App extends React.Component {
  state = {
    foods: json,
    addingFood: false
  }

  addFood = (newFood) => {
    // Add `newFood` to `foods` state
    this.setState({
      foods: [...this.state.foods, newFood],
      addingFood: false
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.addingFood ?
          <AddFood onAdd={this.addFood} />
          :
          <button onClick={ev => this.setState({addingFood: true})}>Add Food</button>
        }
  
        {this.state.foods.map(food => (
          <Foodbox key={food.name} name={food.name} image={food.image} calories={food.calories} />
        ))}
        
      </div>
    );
  }
}

export default App;
