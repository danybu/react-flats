import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import FlatsList from './flats_list';

class FlatsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cardClick = (event) => {
    console.log(event.currentTarget);
    this.setState({
      selected: !this.state.selected
    });
    console.log(`is selected now: ${this.state.selected}`);

  };

  render () {
    return (
      <div>
        <FlatsList cardClick={this.cardClick} />
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default FlatsApp;
