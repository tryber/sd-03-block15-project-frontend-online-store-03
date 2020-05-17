import React from 'react';
import * as api from '../services/api';
import RadioCategory from './RadioCategory';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    const result = api.getCategories();
    result.then((response) => this.setState({ categories: response }));
  }

  render() {
    return (
      <div>
        <legend>Categorias</legend>
        {this.state.categories.map((element) => (
          <RadioCategory
            key={element.id}
            category={element}
            changeEvent={this.props.selectedCategory}
          />
        ))}
      </div>
    );
  }
}

export default Categories;
