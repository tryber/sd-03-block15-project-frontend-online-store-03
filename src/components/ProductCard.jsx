import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props.product;
    return (
        <div
          data-testid="product"
          className="card bg-secondary mb-3"
          style={{ maxWidth: 20 + "rem" }}
        >
          <div className="card-header">{title}</div>
          <div className="card-body">
            <img className="card-img" src={thumbnail} alt="product_image" />
            <p className="card-text">{price}</p>
          </div>
        </div>
    );
  }
}

export default ProductCard;
