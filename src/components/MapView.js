import React, { Component } from 'react';

import { connect } from 'react-redux';

class Mapview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      map: null,
    };
  }

componentWillMount() {
    const url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiWzr6o70whXVGfAS2Ryb3jgI-EQcJVy4&address=Houston" ;
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
          console.log(resp)
        });
      }
  initMap() {

    const map = new window.google.maps.Map(document.querySelector('#map'), {
      zoom: 6,
      center: {lat: 35.194, lng: -80.849}
    });

    this.setState({ map: map });
  }


  componentDidMount() {
    this.initMap();
  }

  render() {

    return (

          <div id="map"></div>

    );
  }
}
export default connect()(Mapview)
