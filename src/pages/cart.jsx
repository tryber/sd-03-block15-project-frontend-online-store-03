import React, { Component } from 'react';
import CaixaVazia from '../Components/CaixaVazia';
import HeaderCarrinho from '../Components/HeaderCarrinho';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <HeaderCarrinho />
        <div className="caixaVazia">
          <CaixaVazia />
        </div>
      </div>
    );
  }
}

export default Cart;
