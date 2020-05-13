import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

class ButtonCart extends Component {
  constructor(args) {
    super(args);
    this.state = {
      redirect: false,
    };
    this.trocaState = this.trocaState.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  trocaState = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
      if (this.state.redirect) {
        return <Redirect to="/cart" />;
      } else {
        return (
          <form>
            <button
              data-testid="shopping-cart-button"
              type="submit"
              className="btn btn-outline-success"
              onClick={() => this.trocaState()}>
              <FiShoppingCart size="25" />
            </button>
          </form>
        );
      }
    }
  }

  export default ButtonCart;
