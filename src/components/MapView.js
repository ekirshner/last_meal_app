import React, { Component } from 'react';
import CurrentLocation from './current-location'
import { connect } from 'react-redux';

class Mapview extends Component {

  render() {

    return (
        <div>
            <div id="map"></div>
            <CurrentLocation />
        </div>
    );
  }
}


export default connect()(Mapview)
