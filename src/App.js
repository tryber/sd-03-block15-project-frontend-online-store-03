import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';

class App extends React.Component {
  componentDidMount() {
    const result = api.getCategories();
    result.then((response) => console.log(response));

    const secondResult = api.getProductsFromCategoryAndQuery('MLB271599','Agro');
    secondResult.then((response) => console.log(response));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
