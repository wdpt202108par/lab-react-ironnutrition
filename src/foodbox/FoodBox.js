import React from "react";
import "bulma/css/bulma.css";


class FoodBox extends React.Component {
  state = {
    quantity: 0
  }

  handleChange = (event) => {
    this.setState({
      quantity: Number(event.target.value),
    })
  }

  handleFormSubmit = (event) => {
    // prevent page from reloading
    event.preventDefault();

    // call the parent passed in frunction
    if (this.state.quantity > 0) {
      this.props.addTodayFood({name: this.props.name, calories: this.props.calories, image: this.props.image, quantity: this.state.quantity});
    }
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <form onSubmit={this.handleFormSubmit} className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />
              </div>
              <div className="control">
                <button type="submit" className="button is-info">
                  +
                </button>
              </div>
            </div>
          </form>
        </article>
      </div>
    );
  }
}


export default FoodBox;