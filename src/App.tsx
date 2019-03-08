import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';
import Hardcoded from './services/remaining_time/hardcoded';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer remainingTimeService={new Hardcoded()} />
      </div >
    );
  }
}

export default App;
