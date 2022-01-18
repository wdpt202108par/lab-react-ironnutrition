import React, { Component } from 'React';

class AddFood extends Component {
  state = {
    name: '',
    calories: Number,
    image: '',
    quantity: Number,
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name: </label>
          <input type="text" name="name" value={this.state.name}></input>
          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} />
          <label>Image:</label>
          <input type="image" name="image" checked={this.state.image} />

          <label>Quantity:</label>
          <input type="number" name="quantity" value={this.state.quantity} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
