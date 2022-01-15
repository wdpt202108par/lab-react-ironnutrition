
import React, { Component} from 'react';

class AddFood extends Component {
    state = {
      name: "",
      calories: "",
      image:"",
    };


    handleSubmit = (event) => {
        event.preventDefault(); // prevent page refresh

        this.props.addTheFood(this.state);
    };

    handleNameInput = (event) => {
        this.setState({ name: event.target.value });
      };
    
      handleCaloriesInput = (event) => {
        this.setState({ calories: event.target.value });
      };



    render() {
        return (
            <div className='AddFood'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameInput}
                    />

                    <input
                        type="text"
                        name="calories"
                        value={this.state.calories}
                        onChange={this.handleCaloriesInput}
                    />

                    <button>Create New food</button>
                </form>
            </div>
        )
    }
    
}

    export default AddFood;
