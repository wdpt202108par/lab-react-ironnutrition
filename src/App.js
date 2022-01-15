import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import FoodBox from './foodBox/FoodBox'
import json from './foods.json'
import { toHaveFocus } from '@testing-library/jest-dom';


class App extends React.Component {
  state = {
    foods : json
  }

  addFood = (food) => {
    const foodCopy = this.state.foods.slice(); // copy
    foodCopy.push(food);

    this.setState({
      foods: foodCopy
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault(); 
    this.addFood(this.state);

    // Reset formulaire
    this.setState({
      name: "",
      calories: "", 
      image: ""
    });
  };

  handleNameInput = (event) => {
    this.setState({ name: event.target.value });
  };

  handleCaloriesInput = (event) => {
    this.setState({ calories: event.target.value });
  };

  handleImgInput = (event) => {
    this.setState({ image: event.target.value });
  };

  handleSearchBox = (event) => {
    //Récupère l'event target value capturée dans l'input
    //Find foodboxes filtrées sur event target value
    const foodCopy = [...json];

    let foodResults = foodCopy.filter( (el) => {
      return el.name.toLowerCase().includes(event.target.value.toLowerCase())
      
    })
    this.setState({ foods: foodResults})
  };


  render() {
    return (
      <div className="App">
        <input 
            type="text"
            id="searchBar"
            name="search"
            value={this.state.search}
            onChange={this.handleSearchBox}
          />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="foodName">Name</label>
          <input 
            type="text"
            id="foodName"
            name="Name "
            value={this.state.name}
            onChange={this.handleNameInput}
          />
          <label htmlFor="foodCalories">Calories</label>
          <input 
            type="number"
            id="foodCalories"
            name="number of calories"
            value={this.state.calories}
            onChange={this.handleCaloriesInput}
          />
          <label htmlFor="foodImg">Image</label>
          <input 
            type="url"
            id="foodImg"
            name="Image"
            value={this.state.image}
            onChange={this.handleImgInput}
          />
          <button>Submit</button>
        </form>
        {this.state.foods.map((el) => {
          return(
            
            <FoodBox key={`${el.name}-${el.image}`}
              image={el.image}
              name={el.name}
              calories={el.calories}
            />
          )
        })}
        
      </div>
    );
  }  
}

export default App;
