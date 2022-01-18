import React from 'react';
import FoodBox from '../foodbox/FoodBox';
import AddFood from '../addfood/AddFood';
import foods from "../foods.json"
import "bulma/css/bulma.css";


class FoodList extends React.Component {
  state = {
    addButtonClicked: false,
    query: "",
    foods: foods,
    todayFoods: []
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    })
  }

  filterFoods = () => {
    return this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.query));
  }

  addFoodHandler = (newFood) => {
    const foodsCopy = [...this.state.foods, newFood];

    this.setState({
      addButtonClicked: false,
      foods: foodsCopy
    })
  }

  addTodayFoodHandler = (newFood) => {
    const todayFoodsCopy = [...this.state.todayFoods, newFood];

    this.setState({
      todayFoods: todayFoodsCopy
    })

    
  }

  render() {
    const filteredFoods = this.filterFoods();
    
    return (
      <div>
        <input type="text" name="search" value={this.state.search} onChange={(e) => this.handleChange(e)}
        />
        
        <button onClick={() => this.setState({ addButtonClicked: !this.state.addButtonClicked })}>Add food</button>
        {this.state.addButtonClicked && <AddFood addFood={this.addFoodHandler} />}

        {filteredFoods.map((food) => <FoodBox key={food.name} name={food.name} image={food.image} calories={food.calories} addTodayFood={this.addTodayFoodHandler} />)}

        <h2>Today's foods</h2>

        <ul>
          {this.state.todayFoods.map(food => <li key={food.name} >{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>)}
        </ul>

        <p>Total: {this.state.todayFoods.length !== 0 ? this.state.todayFoods.reduce((sum, food) => sum + food.calories * food.quantity, 0) : 0} cal</p>
    </div>
    )
  };
}


export default FoodList;