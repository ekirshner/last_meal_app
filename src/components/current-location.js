import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions';

class CurrentLocation extends Component {
    constructor() {
        super()

    }

    initMap() {
            const lat = 37.7869
            const lng =  -122.4041

    // Set initial map
            const map = new window.google.maps.Map(document.querySelector('#map'), {
                center: {
                    lat: lat,
                    lng: lng
                },
                    zoom: 15,
                    tilt: 45
                });
            this.setState({map: map});
            // Get current location of the user and set lat, lng to variables
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

    // custom icon for users location.
                let userIcon = {
                    url: 'blue_MarkerA.png',
                    scaledSize: new window.google.maps.Size(50, 50), // scaled size
                    origin: new window.google.maps.Point(0, 0), // origin
                    anchor: new window.google.maps.Point(0, 50),
                    labelOrigin: new window.google.maps.Point(25, -5) // anchor
                }

    // Set the marker on the map for the user, add animation and set position of custom label
                new window.google.maps.Marker({
                    position: {
                        lat: 37.789,
                        lng: -122.405
                    },
                    map: map,
                    icon: '/blue_MarkerA.png',
                    animation: window.google.maps.Animation.DROP,
                    animation: window.google.maps.Animation.BOUNCE,

                })

    // Recenter the map to the users location.
                map.setCenter(position: {
                    lat: 37.789,
                    lng: -121.405
                })
                fetch( 'https://warm-falls-44996.herokuapp.com/search/restaurants')
                // fetch('https://itunes.apple.com/search?term=justin+bieber&limit=25')
                    .then(res => res.json())
                    .then(response => {
                        console.log(response.businesses)
                        // dispatch(getRestaurants(response.results));
                    let resp = response.businesses

    // make fetch to the google places api and loop thru results.
                // const proxyurl = "https://cors-anywhere.herokuapp.com/";
                // console.log(pos.lat, pos.lng)
                // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${pos.lat}, ${pos.lng}&radius=1000&type=food&key=AIzaSyABHYu_cSGt1eEdxuWyraZIJLVccqOX57E`
                // fetch(proxyurl + url).then(resp => resp.json()).then(resp => {
                //     console.log(resp.results)

    // The code to set timeout for the icons dropping. Cant get it to work with
    // the infoWindow and addListener...
                    // let infoWindow;
                    // for (var i = 0; i < resp.results.length; i++) {
                    //    addMarkerWithTimeout(restaurants.loc, i * 200, resp.results[i].name);
                    //
                    //
                    //  }
                    //
                    //  let markers= []
                    //
                    //  function addMarkerWithTimeout(position, timeout, title) {
                    //          window.setTimeout(function() {
                    //            markers.push(marker= new window.google.maps.Marker({
                    //              position: position,
                    //              map: map,
                    //              animation: window.google.maps.Animation.DROP,
                    //              title: title,
                    //            }));
                    //          }, timeout);
                    //        }
    //loop thru api results.

                    for (let i = 0; i < resp.length; i++) {
                        let marker
                        let infoWindow
                        let markers= []
    // set markers for each result from api
                        marker = new window.google.maps.Marker({
                            position: { // coordinates from geocoding
                                lat: resp[i].coordinates.latitude,
                                lng:resp[i].coordinates.longitude,
                            },
                            title: resp[i].name,
                            animation: window.google.maps.Animation.DROP,
                            map: map,  // map object we created in initMap
                            icon: '/paleblue_MarkerR.png ',
                        });

    // // set the window popup for each marker with info.
                        infoWindow = new window.google.maps.InfoWindow({content: `
                                <div><strong>${resp[i].name}</strong><br>
                                Address: ${resp[i].location.address}</div>
                                `})

    // add event listener to marker.
                        marker.addListener('click', function() {
                            console.log('click')
                            infoWindow.open(map, marker)
                        })
                    }
                })
                    });
            };


    // init map AFTER component mounts.
        componentDidMount() {
            this.initMap();

        }

    render() {
        console.log(this.props.restaurantList)
        return (
            <div className="App">
                <div id="map">{this.marker}</div>
            </div>
        );
    }
}

function stateToProps(state) {
    return {
        restaurantList: state.restaurantList,
    };
}

function dispatchToProps(dispatch) {
    return {
        newRestaurant: function(restaurant) {
            dispatch(addRestaurant(restaurant))
        }
    };
}

export default connect(stateToProps, dispatchToProps)(CurrentLocation)
