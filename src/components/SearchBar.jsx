import React, { Component } from "react";
import { GoSearch } from "react-icons/go";
import ProductCard from "./ProductCard";
import * as apifunc from "../services/api";

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
    const search = apifunc.getProductsByTerm(this.state.item);
    search.then((answear) =>
      this.setState(() => ({ searchResults: answear.results }))
    );
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            data-testid="query-input"
            type="text"
            onChange={this.textChange}
            className="form-control"
            placeholder="Digite sua busca aqui"
          />
        </div>
        <button
          data-testeid="query-button"
          type="button"
          onClick={this.searchAPI}
          className="btn btn-outline-primary"
        >
          <GoSearch />
        </button>

        {this.state.item === "" && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        <div className="row">
          {this.state.searchResults.length > 0 && (
            <div className="col-6">
              {this.state.searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
