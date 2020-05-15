import React from 'react';

class RadioCategory extends React.Component {
  render() {
    const { category, changeEvent } = this.props;
    return (
      <div className="form-check">
        <div>
          <label className="form-check-label" htmlFor={category.id} data-testid="category">
            <input
              type="radio"
              className="form-check-input"
              name="optionsRadios"
              id={category.id}
              value={category.id}
              onChange={changeEvent}
            />
            {category.name}
          </label>
        </div>
      </div>
    );
  }
}

export default RadioCategory;
