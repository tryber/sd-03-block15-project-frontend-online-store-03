import React, { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import * as apifunc from '../services/api';
import SearchedItens from '../pages/SearchedItens';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      searchResults: [],
    };
    this.textChange = this.textChange.bind(this);
    this.searchAPI = this.searchAPI.bind(this);
    this.renderSearchItens = this.renderSearchItens.bind(this);
  }

  textChange(value) {
    this.setState({ item: value.target.value });
  }

  searchAPI(e) {
    e.preventDefault();
    const search = apifunc.getProductsByTerm(this.state.item);
    search.then((answear) => this.setState(() => ({ searchResults: answear.results })));
  }

  renderSearchItens() {
    return <SearchedItens itens={this.state.searchResults} />;
  }

  /* title, image, price, key */
  render() {
    return (
      <div>
        <form>
          <input data-testeid="query-input" type="text" onChange={this.textChange} />
          <button data-testeid="query-button" type="submit" onClick={this.searchAPI} className="btn btn-outline-primary">
            <GoSearch />
          </button>
        </form>
        {this.state.item === '' ? (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (
          <></>
        )}
        {
          this.state.searchResults.length > 0
            ? this.renderSearchItens()
            : <></>
        }
        )
      </div>
    );
  }
}

export default SearchBar;
