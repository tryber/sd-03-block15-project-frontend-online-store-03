import React from 'react';
import Categories from './pages/categories';
import './App.css';
import SearchBar from './components/SearchBar';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <SearchBar />
        <Categories />
      </div>
    );
  }
}

export default App;
