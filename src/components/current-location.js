import React, {Component} from 'react';

export default class CurrentLocation extends Component {
    constructor() {
        super()
        this.state = {
            initialPosition: 0,
            lastPosition: 0
        }
    }

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
