import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props.product;
    return (
      <div
        data-testid="product"
        className="products bg-secondary mb-3"
        style={{ maxWidth: `${20}rem` }}
      >
        <div className="card-header">{title}</div>
        <div className="card-body">
          <img className="card-img" src={thumbnail} alt="product_image" />
          <p className="card-text">{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
          <div className="buttons">
            <button type="button" className="btn btn-outline-success">
              Comprar
            </button>
            <Link
              type="button"
              className="btn btn-outline-primary"
              data-testid="product-detail-link"
              to="/details"
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
