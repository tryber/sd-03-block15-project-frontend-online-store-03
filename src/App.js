import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as pages from './pages/index'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={pages.Main} />
          </Switch>
        </Router>
      </div>
    );
  }
} 

export default App;
