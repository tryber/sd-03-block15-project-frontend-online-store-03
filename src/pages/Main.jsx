import React, { Component } from 'react';
import * as pages from './Index';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <pages.Categories />
          </div>
          <div className="col">
            <pages.SearchBar />
          </div>
          <div className="col-1">
            <pages.ButtonCart />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
