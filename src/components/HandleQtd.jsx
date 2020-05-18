import React, { Component } from 'react';

class HandleQtd extends Component {
  render() {
    return (
      <div>
        <input type="text" disabled value={this.props.quantity} />
        <button value={1} onClick={this.props.alterQuantity}>
          Mais
        </button>
        <button value={-1} onClick={this.props.alterQuantity}>
          Menos
        </button>
      </div>
    );
  }
}

export default HandleQtd;
