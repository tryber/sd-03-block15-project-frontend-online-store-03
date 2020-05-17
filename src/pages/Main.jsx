import React, { Component } from 'react';
import * as pages from './Index';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: '',
      categories: [],
      query: '',
    };
    this.textChange = this.textChange.bind(this);
    this.renderText = this.renderText.bind(this);
    this.selectedCategory = this.selectedCategory.bind(this);
    this.callAPI = this.callAPI.bind(this);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.categoryID !== this.state.categoryID) {
      this.callAPI();
    }
    return null;
  }

  callAPI() {
    const { categoryID, query } = this.state;
    const result = api.getProductsFromCategoryAndQuery(categoryID, query);
    result.then((response) => this.setState({ categories: response.results }));
  }

  textChange(e) {
    this.setState({ query: e.target.value });
  }

  selectedCategory(e) {
    this.setState({ categoryID: e.target.value });
  }

  renderText() {
    if (this.state.query === '') {
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
      <div className="container">
        <div className="row">
          <div className="col-3">
            <pages.Categories selectedCategory={this.selectedCategory} />
          </div>
          <div className="col">
            <pages.SearchBar textChange={this.textChange} callAPI={this.callAPI} />
            {this.renderText()}
            {this.state.categories.length > 0 && (
              <div className="card">
                {this.state.categories.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
