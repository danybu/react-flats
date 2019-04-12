import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleClick = (event) => {
    this.props.cardClick(event);
  };

  render () {
    const { name, imageUrl, price, priceCurrency, lat, lng } = this.props;
    const { selected } = this.state;
    const cardStyle = (selected) ? "card selected" : "card";
    const divStyle = { backgroundImage: `url(${imageUrl})` };
    return (
      <div className={cardStyle} style={divStyle} onClick={this.handleClick}>
        <h4 className="card-description">{ name }</h4>
        <p className="card-category">
          {price}
          {priceCurrency}
        </p>
      </div>
    );
  }
}

export default Flat;
