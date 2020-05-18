import React, { Component } from 'react';
import BuyButton from './BuyButton';
import HandleQtd from './HandleQtd';

export class DetailsProduct extends Component {
  render() {
    return (
      <div className="col">
        <ul className="list-group">
          <li
            className="list-group-item active"
            data-testid="product-detail-name"
          >
            {this.props.product.title}
          </li>
          <li className="list-group-item list-group-item-dark">
            {`Preço: ${this.props.product.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
          </li>
          <li className="list-group-item">{`ID: ${this.props.product.id}`}</li>
          <li className="list-group-item">
            <BuyButton
              product={this.props.product}
              test="product-detail-add-to-cart"
              selectedQtd={this.props.quantity}
            />
            <HandleQtd alterQuantity={this.alterQuantity} quantity={this.props.quantity} />
          </li>
        </ul>
      </div>
    );
  }
}

export default DetailsProduct;
