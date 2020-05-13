import React, { Component } from 'react';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';

class HeaderCart extends Component {
  constructor(args) {
    super(args);
    this.state = { redirect: false };
    this.chamaBotao = this.chamaBotao.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  chamaBotao() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <form>
        <button
          id="shopping-cart-button"
          type="submit"
          className="btn btn-outline-success"
          onClick={() => this.chamaBotao()}
        >
          <MdKeyboardReturn size="30" />
        </button>
        <span>
          <FiShoppingCart />
          Carrinho de compras
        </span>
      </form>
    );
  }
}
export default HeaderCart;
