import React from 'react';
import "bulma/css/bulma.css";

class AddFood extends React.Component {
  state = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
  }
  
  handleChange = (event) => {
    const { name, value } = event.target
    // const name = event.target.name
    // const value = event.target.value
    // const o = {}
    // o[name] = value

    this.setState({
      [name]: value 
    })
  }

  handleFormSubmit = (event) => {
    // prevent page from reloading
    event.preventDefault();

    // call the parent passed in function
    this.props.addFood(this.state);

    // reset state
    this.setState({
      name: "",
      calories: "",
      image: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Calories:</label>
          <input 
            type="number" 
            name="calories" 
            value={this.state.calories} 
            onChange={(e) => this.handleChange(e)}
          />

          <label>Image:</label>
          <input 
            type="url" 
            name="image" 
            value={this.state.image} 
            onChange={(e) => this.handleChange(e)}  
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default AddFood;