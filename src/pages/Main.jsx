import React, { Component } from 'react';
import * as pages from './Index';


class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   state = {
  //     teste: 'teste';
  //    };
  // }

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

        <pages.SearchedItens />
        {/*
        {
          this.state.temProduto === true
            ? <h1>Aqui vai o card 5</h1>
            : (
              <div>
                <h1>Nenhum produto encontrado</h1>
              </div>
            )
        } */}

      </div>
    );
  }
}

export default Main;
