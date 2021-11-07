import React, { Component } from 'react';

export class FoodBox extends Component {
  state = {
    quantity: 0,
  };

  setQuantity = (evt) => {
    this.setState({
      quantity: evt.target.value,
    });
  };

  handleClick = (evt) => {
    this.props.handler({
      quantity: this.state.quantity,
      name: this.props.food.name,
    });

  
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt={this.props.food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"

                  onChange={this.setQuantity}
                />
              </div>
              <div className="control">
                <button onClick={this.handleClick} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
