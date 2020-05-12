import React from 'react';
import * as api from './services/api';
import './App.css';
import Cart from './pages/cart';

class App extends React.Component {
  componentDidMount() {
    const result = api.getCategories();
    result.then((response) => console.log(response));

    const secondResult = api.getProductsFromCategoryAndQuery('MLB271599', 'Agro');
    secondResult.then((response) => console.log(response));
  }

  render() {
    return (
      <Cart />
    );
  }
}

export default App;
