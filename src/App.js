import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        <li>Near by Venues</li>
        <li>Near by Events</li>
      </ul>
        <ul>
          <li>Trending Hot Sauce</li>
          <li>Recomendations</li>
          <li>Top Rated Hot Sauce</li>
        </ul>
      </div>
    );
  }
}

export default App;
