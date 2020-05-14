import React from 'react';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export class ProductDetail extends React.Component {
  render() {
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col">
            <Link to="/"><MdKeyboardReturn size="25px" /></Link>
          </div>
          <div className="produt-cart">
            <Link to="/cart"><FiShoppingCart size="25px" /></Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <img src="encurtador.com.br/U0456" alt="imagem detalhada" />
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item active" data-testid="product-detail-name">
                Laranja cortada ao meio 30 reau
              </li>
              <li className="list-group-item list-group-item-dark">
                Especificações técnicas
              </li>
              <li className="list-group-item">Detalhes</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
