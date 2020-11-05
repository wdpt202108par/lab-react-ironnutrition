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
    query: '',
    chart: [] // [ {name: 'Pizza', qty: 3} ]
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

  // funtion to add an item to `chart` state
  addToChart = (newItem) => {
    const chartCopy = [...this.state.chart];

    //
    // 1. search the presence of already present newItem
    //    - if found: splice it, make a copy, add qty to previous one, push it
    //    - otherwise, just push it
    //

    const itemIndex = this.state.chart.findIndex(item => item.name === newItem.name)
    if (itemIndex >= 0) {
      chartCopy.splice(itemIndex, 1);
      const itemCopy = {...this.state.chart[itemIndex]}
      itemCopy.qty += newItem.qty;
      chartCopy.push(itemCopy);
    } else {
      chartCopy.push(newItem)
    }

    this.setState({
      chart: chartCopy
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
          <Foodbox key={food.name} onChart={this.addToChart} name={food.name} image={food.image} calories={food.calories} />
        ))}

        <h2>Today's food</h2>
        <ul>
        {this.state.chart.map(item => {
          // retrieve the food with that name
          const food = foods.find(food => food.name === item.name)
          return (
            <li key={item.name}>
              {food.name} x{item.qty}
            </li>
          )
        })}
        </ul>
        
      </div>
    );
  }
}

export default App;
