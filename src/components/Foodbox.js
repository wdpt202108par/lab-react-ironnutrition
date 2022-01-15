import { render } from "@testing-library/react";
import React, { Component} from 'react';

class Foodbox extends Component {


    render(){

        let image = this.props.image;
        let name = this.props.name;
        let calories = this.props.calories;
        let quantity=this.props.quantity;


        return(

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
                    <small>{calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input className="input" type="number" value={quantity} />
                    </div>
                    <div className="control">
                    <button className="button is-info">
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


export default Foodbox;