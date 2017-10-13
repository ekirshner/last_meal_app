import React, { Component } from 'react';

export default class Marker extends Component {
constructor(props) {
    super(props)
}

    renderMarker() {
        const marker = new window.google.maps.Marker({
                position: {
                  lat: 35.194,
                  lng: -80.849,
                },
               map: this.props.map,
              });

    }

    render() {
        return(
<div>
    {this.renderMarker()}

</div>
        )
    }
}
