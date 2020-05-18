import React, { Component } from 'react';

class BuyButton extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    const item = JSON.parse(localStorage.getItem('item'));
    if (!item || null) {
      product.quantity = 1;
      return localStorage.setItem('item', JSON.stringify([{ ...product }]));
    }

    if (item.some((element) => element.id === product.id)) {
      const index = item.findIndex((iterator) => iterator.id === product.id);
      item[index].quantity += 1;
      return localStorage.setItem('item', JSON.stringify([...item]));
    }

    product.quantity = 1;
    item.push({ ...product });
    return localStorage.setItem('item', JSON.stringify([...item]));
  }

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
        type="button"
        className="btn btn-outline-primary"
        onClick={this.addToCart}
      >
        Buy
      </button>
    );
  }
}

export default BuyButton;
