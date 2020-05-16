import React from 'react';
import { Link } from 'react-router-dom';

class AddToCart extends React.Component {
  render() {
    const { produto } = this.props;
    return (
      <Link
        type="button"
        className="btn btn-outline-success"
        to={{ pathname: `/cart/${this.props.produto.id}`, state: { produto } }}
      >
        Carrinho

      </Link>
    );
  }
}

export default AddToCart;
