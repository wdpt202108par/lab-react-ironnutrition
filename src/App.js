import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import json from './foods.json';
import FoodBox from './FoodBox';


class App extends React.Component {
  state = {
    foods: json,
    name:'',
    calories:'',
    image:'',
    displayForm : false
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
      foods: foodsCopy
    })
  }



  render() {
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

        {this.state.foods.map((food) => {
          return(
            <FoodBox key={`${food.name}-${food.calories}`} image={food.image} name={food.name} calories={food.calories}/>
          )
        })}
      </div>
    );
  }
}

export default App;