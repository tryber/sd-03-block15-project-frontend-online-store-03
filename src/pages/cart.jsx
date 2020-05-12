import React, { Component } from 'react';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { RiDropboxLine } from 'react-icons/ri';
import './Cart.css';

class Cart extends Component {

  state = {

  }

  render(){
    return(
      <div className="container">
        <div className="carrinhoText">
          <a>
              <MdKeyboardReturn size="30"/>
          </a>
          <span><FiShoppingCart/> Carrinho de compras</span>
        </div>
        
        <div className="caixaVazia">
            <div className="caixa">
              <RiDropboxLine size="500"/>
            </div>
            <div className="caixa2">
              <h1>Seu carrinho está vazio!</h1>
            </div>
        </div>
      </div>
    )
  }
}

export default Cart;
