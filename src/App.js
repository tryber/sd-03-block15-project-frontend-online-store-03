import React, { Component } from 'react';
import './App.css';
import * as api from './services/api';

class App extends Component {
  componentDidMount() {
    const result = api.getCategories();
    result.then((response) => console.log(response));

    const secondResult = api.getProductsFromCategoryAndQuery('MLB271599', 'Agro');
    secondResult.then((response) => console.log(response));
  }

  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

export default App;
