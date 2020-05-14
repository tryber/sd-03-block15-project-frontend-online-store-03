import React from 'react';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export class ProductDetail extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <hr />
        </div>
        <div className="row">
          <div className="col">
            <Link to="/">
              <MdKeyboardReturn size="25px" />
            </Link>
          </div>
          <div className="produt-cart">
            <Link to="/cart">
              <FiShoppingCart size="25px" />
            </Link>
          </div>
        </div>

        <div>
          <hr />
        </div>

        <div className="row">
          <div className="col">
            <img src="https://image.freepik.com/fotos-gratis/imagem-macro-de-laranja-madura-na-mesa-de-madeira_1150-20092.jpg" alt="imagem detalhada" />
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item active" data-testid="product-detail-name">Laranja cortada ao meio 30 reau</li>
              <li className="list-group-item list-group-item-dark">Especificações técnicas</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>

        </div>

      </div>
    );
  }
}

export default ProductDetail;
