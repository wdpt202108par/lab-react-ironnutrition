import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

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
    showform: true,
    foodname: '',
    calories: '',
    input: '', // for the searchbar(iteration 4)
  };

  // prevent page refresh
  handleSubmit = (event) => {
    event.preventDefault();
    // Reset formulaire

    this.setState({
      showform: true,
      foodname: '',
      calories: '',
      input: '',
    });
  };

  handleFoodname = (event) => {
    this.setState({ foodname: event.target.value });
  };

  //iteration 3
  render() {
    return (
      // iteration 2. on va parcourir tous les foods.js
      <div className="App">
        <button onClick={() => this.state.showform}>Add your own food</button>
        <div>
          {
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="this.foodname"
                  value={this.state.foodname}
                  //control component
                  onChange={this.handleFoodname}
                />
              </label>
            </form>
          }
        </div>
        {/* [ <FoodBox key="">, <FoodBox key=""> ] */}
        {this.state.foods.map((food) => (
          <Foodbox
            //il faut ecrire le key!
            key={food.name}
            image={food.image}
            name={food.name}
            calories={food.calories}
          />
        ))}

        <div className="search-bar"></div>
      </div>
    );
  }
}

export default App;
