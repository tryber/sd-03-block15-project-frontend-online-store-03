import React from 'react';
import * as api from '../services/api';
import RadioCategory from './RadioCategory';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
    this.selectedCategory = this.selectedCategory.bind(this);
  }

  componentDidMount() {
    const result = api.getCategories();
    result.then((response) => this.setState({ categories: response }));
  }

  selectedCategory(e) {
    this.props.handleChangeID(e.target.value);
    const categoryId = e.target.value;
    const result = api.getProductsFromCategoryAndQuery(categoryId, '');
    result.then((response) => this.props.handleChangeArr(response.results));
  }

  render() {
    return (
      <div>
        <legend>Categorias</legend>
        {this.state.categories.map((element) => (
          <RadioCategory
            key={element.id}
            category={element}
            changeEvent={this.selectedCategory}
          />
        ))}
      </div>
    );
  }
}

export default Categories;
