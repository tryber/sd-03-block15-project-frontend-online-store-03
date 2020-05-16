import React from 'react';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as pages from './Index';

export class ProductDetail extends React.Component {
  render() {
    const { location: { state: { price, thumbnail, title, id, available_quantity } } } = this.props;
    const estoque = available_quantity;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col"><Link to="/"><MdKeyboardReturn size="25px" /></Link></div>
          <div className="produt-cart"><Link to="/cart"><FiShoppingCart size="25px" /></Link></div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <img src={thumbnail} alt={thumbnail} className="imagem" />
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item active" data-testid="product-detail-name">{title}</li>
              <li className="list-group-item list-group-item-dark">
                {`Preço: ${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
              </li>
              <li className="list-group-item">{`Estoque: ${this.estoque}`}</li>
            </ul>
          </div>
        </div>
        <pages.PlusButton produto={{ price, thumbnail, title, id, available_quantity }} />
      </div>
    );
  }
}

export default ProductDetail;
