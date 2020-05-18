import React, { Component } from 'react';

class BuyButton extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    const item = JSON.parse(localStorage.getItem('item'));
    const qtd = this.props.selectedQtd;
    product.quantity = qtd;

    if (!qtd || null) { product.quantity = 1; }

    if (!item || null) {
      return localStorage.setItem('item', JSON.stringify([{ ...product }]));
    }

    if (item.some((element) => element.id === product.id)) {
      const index = item.findIndex((iterator) => iterator.id === product.id);
      item[index].quantity += 1;
      return localStorage.setItem('item', JSON.stringify([...item]));
    }

    item.push({ ...product });
    return localStorage.setItem('item', JSON.stringify([...item]));
  }

  render() {
    return (
      <button
        data-testid={this.props.test}
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
