import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import BuyButton from '../components/BuyButton';
import HandleQtd from '../components/HandleQtd';
import Coments from '../components/Coments';

export class ProductDetail extends React.Component {
  static configureLinks() {
    return (
      <div className="row">
        <div className="col">
          <Link to="/"><MdKeyboardReturn size="25px" /></Link>
        </div>
        <div className="produt-cart">
          <Link to="/cart" data-testid="shopping-cart-button">
            <FiShoppingCart size="25px" />
          </Link>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.alterQuantity = this.alterQuantity.bind(this);
  }

  alterQuantity(e) {
    const { quantity } = this.state;
    const qtd = parseInt(e.target.value, 10);
    if (quantity < 0) {
      this.setState({ quantity: 0 });
    } else {
      this.setState((prevState) => ({ quantity: prevState.quantity + qtd }));
    }
  }

  details() {
    return (
      <div className="col">
        <ul className="list-group">
          <li
            className="list-group-item active"
            data-testid="product-detail-name"
          >
            {this.state.product.title}
          </li>
          <li className="list-group-item list-group-item-dark">
            {`Preço: ${this.state.product.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
          </li>
          <li className="list-group-item">{`ID: ${this.state.product.id}`}</li>
          <li className="list-group-item">
            <BuyButton
              product={this.state.product}
              test="product-detail-add-to-cart"
              selectedQtd={this.state.product.quantity}
            />
            <HandleQtd alterQuantity={this.alterQuantity} quantity={this.state.product.quantity} />
          </li>
        </ul>
      </div>
    );
  }


  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div className="container">
        <hr />
        {this.configureLinks}
        <hr />
        <div className="row">
          <div className="col">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="imagem"
            />
          </div>
          {this.details()}
        </div>
        <Coments />
      </div>
    );
  }
}

export default ProductDetail;
