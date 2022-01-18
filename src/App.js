import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';

//iteration 1
class Foodbox extends Component {
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left"></div>
          <figure className="image is-64x64">
            <img src={this.props.image} alt="food-img"></img>
            <p>
              <strong>{this.props.name}</strong>
              <br />
              <small>{this.props.calories}cal</small>
            </p>
          </figure>
          <div className="media-content">
            <div className="content"></div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

class App extends Component {
  state = {
    foods: foods,
    filteredFood: foods,
    showform: true,
  };

  filterFood = (foodFiltered) => {
    const newFilter = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(foodFiltered.toLowerCase());
    });
    console.log(foodFiltered);
    this.setState({
      filteredFood: newFilter,
    });
  };

  addFood = (newFood) => {
    // Reset formulaire\
    //copy
    //let copyFoods = this.state.foods.slice();
    //copyFoods.push(this.state.foodname)
    this.setState({
      foods: [
        ...this.state.foods,
        { name: newFood.foodname, calories: newFood.calories },
      ],
    });
  };

  //iteration 3
  render() {
    return (
      // iteration 2. on va parcourir tous les foods.js
      <div className="App">
        <SearchBar filterFood={this.filterFood}></SearchBar>
        <div>{<AddFood addFood={this.addFood} />}</div>
        {/* [ <FoodBox key="">, <FoodBox key=""> ] */}
        {this.state.filteredFood.map((food) => (
          <Foodbox
            //il faut ecrire le key!
            key={food.name}
            image={food.image}
            name={food.name}
            calories={food.calories}
          />
        ))}
      </div>
    );
  }
}

export default App;
