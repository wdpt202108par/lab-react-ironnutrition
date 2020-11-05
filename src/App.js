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
    addingFood: false,
    query: ''
  }

  addFood = (newFood) => {
    // Add `newFood` to `foods` state
    this.setState({
      foods: [...this.state.foods, newFood],
      addingFood: false
    });
  }

  // Update the `query` state on change
  handleQuery = (ev) => {
    this.setState({
      query: ev.target.value
    })
  }

  render() {
    let foods = this.state.foods;
    const query = this.state.query;

    // Filter `foods` with `query`
    if (query) {
      foods = foods.filter(food => food.name.includes(query))
    }

    return (
      <div className="App">
        {
          this.state.addingFood ?
          <AddFood onAdd={this.addFood} />
          :
          <button onClick={ev => this.setState({addingFood: true})}>Add Food</button>
        }

        <input type="search" value={this.state.query} onChange={this.handleQuery} />

  
        {foods.map(food => (
          <Foodbox key={food.name} name={food.name} image={food.image} calories={food.calories} />
        ))}
        
      </div>
    );
  }
}

export default App;
