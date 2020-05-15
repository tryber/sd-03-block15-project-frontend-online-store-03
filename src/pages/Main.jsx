import React, { Component } from 'react';
import * as pages from './Index';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: '',
      categories: [],
    };
    this.takeCategoryIDSelected = this.takeCategoryIDSelected.bind(this);
    this.takeCategoryArray = this.takeCategoryArray.bind(this);
  }

  takeCategoryIDSelected(dataFromCategories) {
    this.setState({ categoryID: dataFromCategories });
  }

  takeCategoryArray(dataFromCategories) {
    this.setState({ categories: dataFromCategories });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <pages.Categories
              handleChangeID={this.takeCategoryIDSelected}
              handleChangeArr={this.takeCategoryArray}
            />
          </div>
          <div className="col">
            <pages.SearchBar
              selectedCategoryID={this.state.categoryID}
              selectedCategoryArr={this.state.categories}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
