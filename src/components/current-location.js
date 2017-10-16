import React, {Component} from 'react';

export default class CurrentLocation extends Component {
    constructor() {
        super()
        this.state = {
            initialPosition: 0,
            lastPosition: 0
        }
    }
// get current location of user.
    componentWillMount() {

        function success(position) {

            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            console.log(latitude, longitude)
        }
        function error() {
            window.alert('location not found')
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }
    render() {
        return (
            <div></div>
        )
    }
}
