import React, { Component } from 'react';
import CurrentLocation from './current-location'
import { connect } from 'react-redux';

class Mapview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
    };
  }
// For search purposes... might not end up using it.
componentWillMount() {
    const url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiWzr6o70whXVGfAS2Ryb3jgI-EQcJVy4&address=Houston" ;
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
          console.log(resp)
        });
      }
      // intitialize map
  initMap() {

    const map = new window.google.maps.Map(document.querySelector('#map'), {
      zoom: 6,
      center: {lat: 35.194, lng: -80.849}
    });

    this.setState({ map: map });
  }
//wait until after mount so the #map will exist in DOM
  componentDidMount() {
    this.initMap();
  }

  render() {
      // creates markers....this will need to loop over data from yelp and create maarker for //each restaurant.
      new window.google.maps.Marker({
             position: {
               lat: 35.194,
               lng: -80.849,
             },
             map: this.state.map,
           });
    return (
        <div>
            <div id="map"></div>
            <CurrentLocation />
        </div>
    );
  }
}

export default connect()(Mapview)
