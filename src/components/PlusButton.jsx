import React, { Component } from 'react';

class PlusButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 1,
      max: this.props.produto.available_quantity,
      min: 0,
      arrProduct: [this.props],
    };
  }

  add() {
    this.setState({ state: this.state.click++ });
    this.setState({ state: this.state.arrProduct.push(this.props) });
    this.setState({ max: this.props.produto.available_quantity });
    console.log(this.state.arrProduct);
    console.log(this.props);
  }

  remove() {
    this.setState({ state: this.state.click-- });
    this.setState({ state: this.state.arrProduct.shift() });
  }

  render() {
    return (
      <div>
        {this.state.click !== this.state.min
          ? <button className="badge badge-pill badge-danger" onClick={() => this.remove()}>-</button>
          : <button className="badge badge-pill badge-danger">-</button>}

        {`  ${this.state.click} `}

        {this.state.click !== this.state.max
          ? <button className="badge badge-pill badge-success" onClick={() => this.add()}>+</button>
          : <button className="badge badge-pill badge-success">+</button>}

        {this.state.click === this.state.max
          && <h1>{`Desculpe, só temos ${this.state.max} em estoque.`}</h1>}

        {this.state.click === this.state.min
          && <h1>{`Impossivel adicionar ${this.state.min} itens.`}</h1>}
      </div>

    );
  }
}

export default PlusButton;
