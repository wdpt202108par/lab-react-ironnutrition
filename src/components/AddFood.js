import React from 'react';

class AddFood extends React.Component {

  state = {
    name: '',
    image: '',
    calories: ''
  }

  handleChange = (ev) => {
    const {name, value} = ev.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.onAdd(this.state)
  }

  render() {

    return (
      <div className="AddFood">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Name:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label>
              Image:
              <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label>
              Calories:
              <input type="number" name="calories" step="10" value={this.state.calories} onChange={this.handleChange} />
            </label>
          </p>

          <button>Add Food</button>
        </form>
      </div>
    );
  }
}

export default AddFood