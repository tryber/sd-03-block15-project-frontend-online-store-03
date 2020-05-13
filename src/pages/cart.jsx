import React, { Component } from 'react';
import BoxEmpty from '../components/boxEmpty';
import HeaderCart from '../components/HeaderCart';

export class Cart extends Component {

  state = {
    temProduto: false,
  }

  render(){

    return(
      <div className="container">
        <HeaderCart/>
        {
        this.state.temProduto ?
          <h1>Aqui tem que ter o carrinho!</h1>
          :
          <BoxEmpty />
        }
      </div>
    )
  }
}
