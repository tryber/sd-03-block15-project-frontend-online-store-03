import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as pages from './pages/Index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={pages.Main} />
            <Route exact path="/cart" component={pages.Cart} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
