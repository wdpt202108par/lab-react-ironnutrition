import React from 'react';

class FoodBox extends React.Component {
  state = {
    count: 1,
    name:'',
    quantity:''
  }

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  handleClick = (event) => {
    let {name, count, quantity, value} = event.target;
    this.setState({
      [name]: value, 
      [count]: value, 
      [quantity]: value
    })
    this.state.todaysfood(this.state)
  }
  
    render(){
      return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="foodpic" />
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
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" min='1' value={this.state.quantity} onChange={this.handleChange} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleClick}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      )
    }
}

export default FoodBox;