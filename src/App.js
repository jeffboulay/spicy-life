import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './HomePage';
import Trending from './TrendingPage';
import TopHotSauce from './TopPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/top" component={TopHotSauce} />
        </div>
      </Router>
    );
  }
}

export default App;
