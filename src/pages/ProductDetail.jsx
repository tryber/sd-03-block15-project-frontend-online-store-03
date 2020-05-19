import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardReturn } from 'react-icons/md';
import ButtonCart from '../components/ButtonCart';
import Coments from '../components/Coments';
import DetailsProduct from '../components/DetailsProduct';

export class ProductDetail extends React.Component {
  // static configureLinks() {
  //   return (
  //     <div className="row">
  //       <div className="col">
  //         <Link to="/"><MdKeyboardReturn size="25px" /></Link>
  //       </div>
  //       <div className="produt-cart">
  //         <ButtonCart button={"shopping-cart-button"} />
  //       </div>
  //     </div>
  //   );
  // }

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

  render() {
    const { location: { state: { product } } } = this.props;
    const { quantity } = this.state;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col">
            <Link to="/"><MdKeyboardReturn size="25px" /></Link>
          </div>
          <div className="produt-cart">
            <ButtonCart button="shopping-cart-button" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="imagem"
            />

          </div>
          <DetailsProduct product={product} quantity={quantity} />
        </div>
        <Coments />
      </div>
    );
  }
}

export default ProductDetail;
