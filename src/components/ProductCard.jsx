import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BuyButton from './BuyButton';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" className="products bg-secondary mb-3" style={{ maxWidth: `${20}rem` }}>
        <div className="card-header">{product.title}</div>
        <div className="card-body">
          <img className="card-img" src={product.thumbnail} alt="product_image" />
          <p className="card-text">{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
          <div className="buttons">
            <BuyButton product={product} test="product-add-to-cart" />
            <Link
              type="button"
              className="btn btn-outline-primary"
              data-testid="product-detail-link"
              to={{
                pathname: `/details/${product.id}`,
                state: { product },
              }}
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
