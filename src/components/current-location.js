import React, {Component} from 'react';

function geoFindMe() {
    function success(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDWE4MPxffHrFCFgOJ62cm_0m1NRBwxm-g&center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    }

    function error() {}

    navigator.geolocation.getCurrentPosition(success, error);
    return (
        <div>img</div>
    )
}

export default class CurrentLocation extends Component {
    constructor() {
        super()
        this.state = {
            lat: 0,
            long: 0
        }
    }
    render() {
        return (
            <div>
                {geoFindMe}
            </div>

        )
    }
}
