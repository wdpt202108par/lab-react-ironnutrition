import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';

import json from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/Addfood';

/* 0. class-component */
class App extends React.Component{
  state={
    foods:json,
    addingFood: false,
  }
}
return (
    <div className="App">
      <h1>Let's see our foodbox</h1>

            {this.state.addingFood ?  
            <AddFood addTheFood={this.addTheFood} />

            <button onClick={event =>this.setState({addingFood:true})}> Create Food </button>
                  {json.map((el) => {
                return (
            <Foodbox
            key={el.name}
            image={el.image}
            name={el.name}
            calories={el.calories}
            quantity={el.quantity}
          />
        );
      })}
    </div>
  );
/*}*/


export default App;
