import React, { Component } from 'react';
import Categories from '../components/categories';
import ButtonCart from '../components/buttonCart';
import BoxEmpty from '../components/buttonCart';

class Main extends Component {

  state = {
    temProduto: false,
  }

  render(){

    return(
      <div className="container">

        <div className="categories">
          <Categories/>
        </div>

        <div className="carrinho">
          
        </div>

        <div className="box-empty">
          <BoxEmpty/>
        </div>

        {
          this.state.temProduto === true ?
            <h1>Aqui vai o card 5</h1>
            :
            <h1>Você não selecionou nenhum produto!</h1>
        }

      </div>
    )
  }
}

export default Main;