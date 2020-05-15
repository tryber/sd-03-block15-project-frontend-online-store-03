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
            <Route exact path="/details/:id?" component={pages.ProductDetail} />
            <Route path="/cart" component={pages.Cart} />
            <Route exact path="/details/:id?" component={pages.ProductDetail} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
