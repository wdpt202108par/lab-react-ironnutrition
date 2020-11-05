import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';

import json from './foods.json';

import Foodbox from './components/Foodbox'

function App() {
  return (
    <div className="App">
      <Foodbox name="Pizza" image="https://i.imgur.com/eTmWoAN.png" calories={400} />
    </div>
  );
}

export default App;
