import React from 'react';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
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
