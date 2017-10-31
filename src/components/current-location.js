import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRestaurant} from '../actions';
import star from '../Star.png';

class CurrentLocation extends Component {
    constructor() {
        super()

        this.state= {
            restaurants: [],
        }
    }

    initMap() {
        const lat = 35.227
        const lng = -80.8425

        // Set initial map
        const map = new window.google.maps.Map(document.querySelector('#map'), {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: 15,
            tilt: 45
        });


        // Set the marker on the map for the user, add animation and set position of custom label
        new window.google.maps.Marker({
            position: {
                lat: 35.227,
                lng: -80.8425
            },
            map: map,
            animation: window.google.maps.Animation.DROP,
            animation: window.google.maps.Animation.BOUNCE,
            title: "Your Location!",
            icon: "https://maps.gstatic.com/mapfiles/ms2/micons/man.png"
        })

        this.setState({map: map});
    };

    // init map AFTER component mounts.
    componentDidMount() {
        this.initMap();
    }

    renderMarkers() {
        const places = this.props.restaurantList;

                // Loop over all of the places in the store, adding a marker for each.
                for (let i = 0; i < places.length; i++) {

                let marker= new window.google.maps.Marker({
                       position: {               // coordinates from geocoding
                         lat: places[i].latitude,
                         lng: places[i].longitude,
                       },
                       title: places[i].name,
                       animation: window.google.maps.Animation.DROP,
                       map: this.state.map,
                       icon: "https://maps.gstatic.com/mapfiles/ms2/micons/ltblue-dot.png",
          // map object we created in initMap
                     });
                     const infoWindow = new window.google.maps.InfoWindow()


                marker.addListener('click', function() {

                    const content = `
                        <div id="infoWindow">
                            <div>
                                <strong><h2>${places[i].name}</h2></strong>
                                <strong><img class="star-rating" src=${ star }> ${places[i].rating}</strong><br>
                                <p>${places[i].display_address}<br><p>
                                    <button><a href="/userDetails/${i}">View Menu<a/></button>
                            </div>
                            <div>
                                <img src=${places[i].image_url} alt="Restaurant">
                            </div>
                        </div>
                        `
                    infoWindow.setContent(content)
                    infoWindow.open(this.map, this)
                })
        }
    }

    render() {

        return (
            <div className="App">
                <div id="map">{this.renderMarkers()}</div>
            </div>
        );
    }
}


function stateToProps(state) {
    return {restaurantList: state.restaurantList};
}

function dispatchToProps(dispatch) {
    return {
        newRestaurant: function(restaurant) {
            dispatch(addRestaurant(restaurant))
        }
    };
}

export default connect(stateToProps, dispatchToProps)(CurrentLocation)
