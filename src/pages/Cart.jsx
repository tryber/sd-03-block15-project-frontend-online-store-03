import React, { Component } from 'react';
import BoxEmpty from '../components/BoxEmpty';
import HeaderCart from '../components/HeaderCart';
import CartProducts from '../components/CartProducts';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.configureCart = this.configureCart.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('item')) {
      return this.configureCart();
    }

    return null;
  }

  configureCart() {
    const cartList = JSON.parse(localStorage.getItem('item'));
    this.setState({ products: cartList });
  }

  render() {
    return (
      <div className="container">
        <HeaderCart />
        {(this.state.products.length > 0) ? (
          <div>
            {this.state.products.map((cartItem) => (
              <CartProducts key={cartItem.id} item={cartItem} />
            ))}
          </div>
        ) : (
          <BoxEmpty />
        )}
      </div>
    );
  }
}

export default Cart;
