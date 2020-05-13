import React, { Component } from 'react';
import BoxEmpty from '../components/BoxEmpty';
import HeaderCart from '../components/HeaderCart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { temProduto: false };
  }

  render() {
    return (
      <div className="container">
        <HeaderCart />
        {this.state.temProduto ? (
          <h1>Aqui tem que ter o carrinho!</h1>
        ) : (
          <BoxEmpty />
        )}
      </div>
    );
  }
}

export default Cart;
