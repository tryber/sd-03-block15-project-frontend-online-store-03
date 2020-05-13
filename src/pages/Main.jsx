import React, { Component } from 'react';
import * as pages from './Index';
import Produtos from '../components/Produtos';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { temProduto: false };
  }

  render() {
    return (
      <div className="container">

        <div className="src-bar">
          <pages.SearchBar />
        </div>

        <div className="categories">
          <pages.Categories />
        </div>

        <div className="carrinho">
          <pages.ButtonCart />
        </div>

        <Produtos />

        {
          this.state.temProduto === true
            ? <h1>Aqui vai o card 5</h1>
            : (
              <div>
                <h1>Você não selecionou nenhum produto!</h1>
              </div>
            )
        }

      </div>
    );
  }
}

export default Main;
