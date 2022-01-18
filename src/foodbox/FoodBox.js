import React from "react";
import "bulma/css/bulma.css";


class FoodBox extends React.Component {
  state = {
    name: this.props.name,
    calories: 0,
    image: "",
    quantity: 0
  }

  render() {
    return (
      <div key={this.state.name} className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.state.image} alt={this.state.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.name}</strong> <br />
                <small>{this.state.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.state.quantity} />
              </div>
              <div className="control">
                <button onClick={() => this.setState({ quantity: this.state.quantity + 1})} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}


export default FoodBox;