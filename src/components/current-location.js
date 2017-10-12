import React, { Component } from 'react';


 function geoFindMe() {
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;


    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDWE4MPxffHrFCFgOJ62cm_0m1NRBwxm-g&center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

  }

  function error() {
  }


  navigator.geolocation.getCurrentPosition(success, error);
}
geoFindMe()
export default class CurrentLocation extends Component {
    render() {
        return(<div>
            
        </div>

        )
    }
}
