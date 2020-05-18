import React from 'react';
import Stars from './Stars';

export class Coments extends React.Component {
  render() {
    return (
      <form className="container">
        <div className="form-group">
          <label htmlFor="Email">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="exemple@email.com"
          />
          <small
            id="emailHelp"
            className="form-text text-muted"
          >
            Esse email é usado apenas para verificarmos o usuário.
          </small>
        </div>
        <Stars />
        <div className="form-group">
          <label htmlFor="exampleTextarea">Escreva seu comentário.</label>
          <textarea
            data-testid="product-detail-evaluation"
            className="form-control"
            id="exampleTextarea"
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary">Comentar</button>
      </form>
    );
  }
}

export default Coments;
