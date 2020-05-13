import React, { Component } from 'react';
import Categories from '../components/categories';
import ButtonCart from '../components/buttonCart';
import SearchBar from '../components/SearchBar';

class Main extends Component {

  state = {
    temProduto: false,
  }

  render(){

    return(
      <div className="container">

        <div className="src-bar">
          <SearchBar />
        </div>

        <div className="categories">
          <Categories />
        </div>

        <div className="carrinho">
          <ButtonCart />
        </div>

        {
          this.state.temProduto === true ?
            <h1>Aqui vai o card 5</h1>
            :
            <div>
              <h1>Você não selecionou nenhum produto!</h1>
            </div>
        }

      </div>
    )
  }
}

export default Main;
