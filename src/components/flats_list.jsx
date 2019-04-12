import React, { Component } from 'react';
import flats from '../../data/flats_seed';
import Flat from './flat';

class FlatsList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="flat-list">
        {flats.map((flat) => { return <Flat {...flat} key={flat.name} cardClick={this.props.cardClick} />; })}
      </div>
    );
  }
}

export default FlatsList;
