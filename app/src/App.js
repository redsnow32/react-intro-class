import React, { Component } from 'react';
import './App.css';

import Calculator from './components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator>Brandons Calculator</Calculator>
      </div>
    );
  }
}

export default App;
