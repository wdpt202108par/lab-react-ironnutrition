import { Component } from 'react';

class AddFood extends Component {
  state = {
    foodname: '',
    calories: '',
    image: '',
  };

  handleSubmit = (event) => {
    event.preventDefault(); //prevent page refresh
    // Reset formulaire\
    //copy
    //let copyFoods = this.state.foods.slice();
    //copyFoods.push(this.state.foodname)
    this.props.addFood(this.state);
    this.setState({
      showform: true,
      foodname: '',
      calories: '',
      input: '',
    });
  };

  handleNewFood = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="foodname"
            value={this.state.foodname}
            //control component
            onChange={this.handleNewFood}
          />
        </label>

        <label>
          Calories:
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            //control component
            onChange={this.handleNewFood}
          />
        </label>

        <button
        //onClick={() => this.state.showform}
        >
          Add your own food
        </button>
      </form>
    );
  }
}

export default AddFood;
