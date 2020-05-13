import React from 'react';
import { RiDropboxLine } from 'react-icons/ri';

function CaixaVazia() {
  return (
    <div>
      <div className="caixa">
        <RiDropboxLine size="500" />
      </div>

      <div>
        <h1>Seu carrinho está vazio!</h1>
      </div>
    </div>
  );
}

export default CaixaVazia;