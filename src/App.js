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
<<<<<<< HEAD
            <Route exact path="/cart" component={pages.Cart} />
            <Route exact path="/details/:id?" component={pages.ProductDetail} />
=======
            <Route path="/cart" component={pages.Cart} />
>>>>>>> d1c95205d96d99f5e4cf87f0f7d5ced23a8c7c64
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
