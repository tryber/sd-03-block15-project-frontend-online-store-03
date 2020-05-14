import React, { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import ProductCard from './ProductCard';
import * as apifunc from '../services/api';
import * as pages from '../pages/Index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      searchResults: [],
    };
    this.textChange = this.textChange.bind(this);
    this.searchAPI = this.searchAPI.bind(this);
    this.renderText = this.renderText.bind(this);
  }

  textChange(value) {
    this.setState({ item: value.target.value });
  }

  searchAPI(e) {
    e.preventDefault();
    const search = apifunc.getProductsFromCategoryAndQuery('', this.state.item);
    search.then((answear) => this.setState({ searchResults: answear.results }));
  }

  renderText() {
    if (this.state.item === '') {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <div className="bar">
          <input
            data-testid="query-input"
            type="text"
            onChange={this.textChange}
            className="form-control search-bar"
            placeholder="Digite sua busca aqui"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={this.searchAPI}
            className="btn btn-outline-primary"
          >
            <GoSearch />
          </button>
          <pages.ButtonCart />
        </div>

        {this.renderText()}
        {this.state.searchResults.length > 0 && (
          <div className="card">
            {this.state.searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
