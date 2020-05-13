import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

class ButtonCart extends Component {
  constructor(args) {
    super(args);
    this.state = {
      redirect: false,
    };
    this.chamaBotao = this.chamaBotao.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  chamaBotao = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/cart/" />;
    } else {
      return (
        <form>
          <button
            id="shopping-cart-button"
            type="submit"
            className="btn btn-outline-success"
            onClick={() => this.chamaBotao()}
          >
            <FiShoppingCart size="25" />
          </button>
        </form>
      );
    }
  }
}

export default ButtonCart
