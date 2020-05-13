import React from 'react';

function Produtos() {
  const simpleAPI = [
    {
      nome: 'teste1',
      preco: 1000,
      img: 'https://images.suamusica.com.br/zQNgbcXAKAOZST_gDemVNbtqj1M=/300x300/28377881/2048560/cd_cover.png',
    },
    {
      nome: 'teste2',
      preco: 1500,
      img: 'https://images.suamusica.com.br/zQNgbcXAKAOZST_gDemVNbtqj1M=/300x300/28377881/2048560/cd_cover.png',
    },
    {
      nome: 'teste3',
      preco: 1700,
      img: 'https://images.suamusica.com.br/zQNgbcXAKAOZST_gDemVNbtqj1M=/300x300/28377881/2048560/cd_cover.png',
    },
  ];

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
