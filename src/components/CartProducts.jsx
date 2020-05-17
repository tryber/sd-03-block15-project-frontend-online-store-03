import React, { Component } from 'react';

class CartProducts extends Component {
  render() {
    const { id, thumbnail, title, price, quantity } = this.props.item;
    return (
      <ul>
        <li>
          <p>{id}</p>
          <img src={thumbnail} alt={title} />
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{price}</p>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          <p>Total: {price * quantity}</p>
        </li>
      </ul>
    );
  }
}

export default CartProducts;
