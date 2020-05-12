import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

function BotaoCarrinho() {
  return (
    <button type="button" className="btn btn-outline-success">
      <FiShoppingCart size="25" />
    </button>
  );
}

export default BotaoCarrinho;
