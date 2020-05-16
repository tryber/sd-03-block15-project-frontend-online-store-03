import React, { Component } from 'react';
import BoxEmpty from '../components/BoxEmpty';
import HeaderCart from '../components/HeaderCart';
import * as pages from './Index';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { produto: [] };
  }

  componentDidMount() {
    this.setState({ produto: this.props.location.state.produto.produto });
  }


  render() {
    console.log(this.state.produto.length);
    return (
      <div className="container">
        <HeaderCart />
        {this.state.produto.length >= 0 ? (
          <h1>Aqui tem que ter o carrinho!</h1>
        ) : (
          <pages.PlusButton produto={this.state.produto} />
        )}
      </div>
    );
  }
}

export default Cart;
