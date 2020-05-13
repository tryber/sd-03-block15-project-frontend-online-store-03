import React, { Component } from "react";
import { GoSearch } from "react-icons/go";
import * as apifunc from '../services/api';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      searchResults: [],
    };
    this.textChange = this.textChange.bind(this);
    this.searchAPI = this.searchAPI.bind(this);
  }

  textChange(value) {
    this.setState({ item: value.target.value });
  }

  searchAPI(e) {
    e.preventDefault();
    const search = apifunc.getProductsByTerm(this.state.item)
    search.then(answear => this.setState(() => ({
      searchResults: answear.results,
    })));
  }
    /* title, image, price, key */
  render() {
    return (
      <div>
        <form>
          <input data-testeid="query-input" type="text" onChange={this.textChange} />
          <button data-testeid="query-button" type="submit" onClick={this.searchAPI} className="btn btn-outline-primary" >
            <GoSearch />
          </button>
        </form>
        {this.state.item === "" ? (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (
          <React.Fragment />
        )}
      </div>
    );
  }
}

export default SearchBar;
