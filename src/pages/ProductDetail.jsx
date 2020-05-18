import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import Coments from '../components/Coments';

export class ProductDetail extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
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
            <img src={product.thumbnail} alt={product.title} className="imagem" />
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item active" data-testid="product-detail-name">
                {product.title}

              </li>
              <li className="list-group-item list-group-item-dark">
                {`Preço: ${product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
              </li>
              <li className="list-group-item">{`ID: ${product.id}`}</li>
            </ul>
          </div>
        </div>
        <Coments />
      </div>
    );
  }
}

export default ProductDetail;
