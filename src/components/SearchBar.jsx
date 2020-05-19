import React, { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import * as pages from '../pages/Index';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="bar">
          <input
            data-testid="query-input"
            type="text"
            onChange={this.props.textChange}
            className="form-control search-bar"
            placeholder="Digite sua busca aqui"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={this.props.callAPI}
            className="btn btn-outline-primary"
          >
            <GoSearch />
          </button>
          <pages.ButtonCart button="shopping-cart-button" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
