import React from 'react'

class Foodbox extends React.Component {
  state = {
    qty: 1
  }

  hangleQty = (ev) => {
    this.setState({qty: this.state.qty+1})
  }

  render() {
    const {name, image, calories} = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.state.qty}
                  onChange={this.hangleQty}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={(ev) => this.props.onChart({name: name, qty: this.state.qty})}>
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

export default Foodbox