import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';

import json from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/Addfood';
import { render } from '@testing-library/react';

class App extends React.Component{
  state= {
    foods: json, // [ {name: 'Pizza', }, ... ]

/* 1. définir un state */
    addingFood: false,
  }

  addNewFood = (newFood) => {
    // newFood : {name: 'Laitue', calories: 400}

    // ajouter newFood au tableau this.state.foods
    this.setState({
      foods: [...this.state.foods, newFood],
    })
  }

/* 2. condition si click sur le button alors addingfood =true */
  render() {
    return (
      <div className="App">
        <h1>Let's see our foodbox</h1> 

        <button onClick={event => this.setState({addingFood: !this.state.addingFood})}> Create Food </button>
        {
          this.state.addingFood && <AddFood addFood={this.addFood} sendfood={this.addNewFood} />
        }

        { json.map((el) => {
            return (
              <Foodbox
                key={el.name}
                image={el.image}
                name={el.name}
                calories={el.calories}
                quantity={el.quantity}
              />
            )
          })
        };
      

      </div>
    );
  }
}


export default App;
