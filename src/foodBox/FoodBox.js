import React from 'react'

class FoodBox extends React.Component {
  state = {
    quantity: 1,
  }

    render() {
      return(
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                  <img src={this.props.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                    <input className="input" type="number" value={this.state.quantity} onChange={(event) => { 
                      //console.log('ev', event.target.value)
                      this.setState({quantity: event.target.value})
                    }}/>
                </div>
                <div className="control">
                    <button onClick={(event) => {
                      this.props.clickToAddCart(this.props.name, this.props.calories, this.state.quantity)
                    }} 
                    className="button is-info">
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

export default FoodBox