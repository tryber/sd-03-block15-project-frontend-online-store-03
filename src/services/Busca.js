import React, { Component } from 'react'

export class Busca extends Component {
  
  constructor(props) {
    super(props);
    
    this.setState({ item: value.target.valu})
  }

  textInput() {
    const { item } = this.state;
    if (item === '') {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return <p>{item}</p>;
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.textChange} />
        {this.textInput()}
      </div>
    )
  }
}

export default Busca
