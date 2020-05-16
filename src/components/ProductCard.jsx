import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id, available_quantity } = this.props.product;
    return (
      <div data-testid="product" className="products bg-secondary mb-3" style={{ maxWidth: `${20}rem` }}>
        <div className="card-header">{title}</div>
        <div className="card-body">
          <img className="card-img" src={thumbnail} alt="product_image" />
          <p className="card-text">{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
          <div className="buttons">
            <AddToCart produto={this.props.product} />
            <Link
              type="button"
              className="btn btn-outline-primary"
              data-testid="product-detail-link"
              to={{ pathname: `/details/${id}`, state: { title, thumbnail, price, id, available_quantity } }}
            >
              Detalhes
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
