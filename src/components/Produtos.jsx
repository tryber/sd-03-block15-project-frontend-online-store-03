import React, { Component } from 'react';

class Produtos extends Component {


  const api = simpleAPI.map((produto) => (
    <div className="card">

      <div className="title">
        <h3>{produto.nome}</h3>
      </div>

      <div className="img">
        <img src={produto.img} alt="imagem" />
      </div>

      <div className="preco">
        <h3 key={produto.nome}>{produto.preco}</h3>
      </div>

    </div>
  ));

  return (
    <div className="Container">
      {api}
    </div>
  );
}

export default Produtos;
