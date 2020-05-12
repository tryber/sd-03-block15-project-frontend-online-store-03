import React from 'react';
import './App.css';
import { FiMail } from 'react-icons/fi';
import * as api from './services/api';

class App extends React.Component {
  componentDidMount() {
    const result = api.getCategories();
    result.then((response) => console.log(response));

    const secondResult = api.getProductsFromCategoryAndQuery('MLB271599', 'Agro');
    secondResult.then((response) => console.log(response));
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <FiMail />

        <button type="button" className="btn btn-primary">Primary</button>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" style="">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>

      </div>

    );
  }
}

export default App;
