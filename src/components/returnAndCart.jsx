import React from 'react';
import { MdKeyboardReturn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';

function HeaderCarrinho() {
  return (
    <div className="carrinhoText">
      <a>
        <MdKeyboardReturn size="30" />
      </a>
      <span>
        <FiShoppingCart />
        Carrinho de compras
      </span>
    </div>
  );
}

export default HeaderCarrinho;