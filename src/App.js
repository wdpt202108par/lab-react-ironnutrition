import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import json from './foods.json';
import FoodBox from './FoodBox';
import SearchBox from './SearchBox';


class App extends React.Component {
  state = {
    foods: json,
    name:'',
    calories:'',
    image:'',
    quantity:'',
    displayForm : false,
    query: "",
    cart:[] // [ {name: 'Pizza', quantity: 2}, ... ]
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addfood(this.state);
    this.setState({
      name:'',
      calories:'',
      image:'',
      displayForm : false
    })
  }

  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCaloriesInput = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleImageInput = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  addfood = (addedfood) => {
    const foodsCopy = this.state.foods.slice();
    foodsCopy.push(addedfood);
    this.setState({
      foods: foodsCopy,
    })
  }

  searchResultsHandler = (search) => {
    this.setState({
      query: search
    })
  }

  setQuery = (val) => {
    this.setState({query: val})
  }

  todaysfood = (event) => {
    // const foodsTer = this.state.foods.slice();
    const tF = this.cart.push(event.target.value);
    this.setState({
      cart: tF
    })
  }

  render() {
    const filteredFoods = this.state.foods.filter((food) => food.name.toLowerCase().includes(this.state.query.toLowerCase()))

    return (
      <div className="App">
        <button onClick={(event) => {
          this.setState({displayForm: !this.state.displayForm})
        }}>Add new food</button>

        {this.state.displayForm && (
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleNameInput}/>
  
            <label>Number of calories:</label>
            <input type="number" 
            name="calories" 
            value={this.state.calories} 
            onChange={this.handleCaloriesInput}/>
  
            <label>Image:</label>
            <input type="text" 
            name="image" 
            value={this.state.image} 
            onChange={this.handleImageInput}/>

            <button>Submit</button>
          </form>
        )}

        <SearchBox query={this.state.query} setQuery={this.setQuery} />
        <div className="columns">
          <div className="column">
            {filteredFoods.map((food) => {
            return(
              <FoodBox handleClick={this.todaysfood} key={`${food.name}-${food.calories}`} image={food.image} name={food.name} calories={food.calories}/>
            )
          })}
          </div>
          <div className="column">
            <h1>Today's foods</h1>
            <ul>
              <li>{this.tF}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;