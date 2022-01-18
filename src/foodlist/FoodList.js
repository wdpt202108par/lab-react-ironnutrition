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
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    })
  }

  filterFoods = () => {
    return [
      this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.query)),
      this.state.foods.filter(food => food.quantity > 0)
    ]
  }

  addFoodHandler = (newFood) => {
    const foodsCopy = [...this.state.foods, newFood];

    this.setState({
      addButtonClicked: false,
      foods: foodsCopy
    })
  }

  render() {
    const [ filteredFoods, todayFoods ] = this.filterFoods();
    
    return (
      <div>
        <input 
          type="text" 
          name="search" 
          value={this.state.search} 
          onChange={(e) => this.handleChange(e)}
        />
        
        <button onClick={() => this.setState({ addButtonClicked: !this.state.addButtonClicked })}>Add food</button>
        {this.state.addButtonClicked && <AddFood addFood={this.addFoodHandler} />}

        {filteredFoods.map((food) => {
        return(
          <div key={food.name} className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} alt={food.name} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={food.quantity} />
                  </div>
                  <div className="control">
                    <button onClick={() => this.increaseFoodQty(food.name)} className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )})}

        <h2>Today's foods</h2>
        <ul>
          {todayFoods.map(food => {
            return <li>{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
          })}
        </ul>
        <p>Total: {todayFoods.length !== 0 ? this.state.todayFoods.reduce((sum, el) => sum + el.calories) : 0 }</p>
    </div>
    )
  };
}


export default FoodList;