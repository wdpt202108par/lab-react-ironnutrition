import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import FoodBox from './foodBox/FoodBox'
import json from './foods.json'


class App extends React.Component {
  state = {
    foods : json,
    cart: [] 
  }

  addFood = (food) => {
    const foodCopy = this.state.foods.slice();
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
    const foodCopy = [...json];

    let foodResults = foodCopy.filter( (el) => {
      return el.name.toLowerCase().includes(event.target.value.toLowerCase())
      
    })
    this.setState({ foods: foodResults})
  };

  addToCart = (name, calories, quantity) => {
    const cartCopy = [...this.state.cart]
    cartCopy.push({
      name: name,
      calories: calories,
      quantity: quantity
    });

    this.setState({
      cart: cartCopy
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <div className="control">
          <input className="input isHovered"
              type="text"
              id="searchBar"
              name="search"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleSearchBox}
            />        
        </div>
        <div class="columns">
          <div class="column">
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
                  clickToAddCart={this.addToCart}
                />
              )
            })}
          </div>
          <div class="column">
            <h2>Today's Foods</h2>
            <ul>
              {this.state.cart.map((el) => {
                return (
                  <li>{el.quantity} {el.name} - {el.quantity * el.calories} cal </li> 
                )
              })}
            </ul>
            <p>Total: {this.state.cart.reduce((a, b) =>  a + (b.calories * b.quantity), 0 )}</p>  
          </div>
        </div>
      </div>  
    );
  }  
}

export default App;
