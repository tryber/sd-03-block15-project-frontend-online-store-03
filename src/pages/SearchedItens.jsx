import React from 'react';

class SearchedItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itens: [] };
  }

  componentDidMount() {
    const { itens } = this.props;
    console.log(itens);
  }

  render() {
    return (
      <div>
        <h1>
          {
          this.state.itens === null || undefined
            ? <h1>Nada pesquisado</h1>
            : <h1>aaaaa</h1> /* <h1>{/this.state.itens[0].title}</h1> */
        }
        </h1>
      </div>
    );
  }
}

export default SearchedItens;
