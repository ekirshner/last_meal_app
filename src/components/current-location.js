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
        console.log(this.state.restaurants)
        console.log(this.props.restaurants)
        console.log(this.props.restaurantList)
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


        // Get current location of the user and set lat, lng to variables
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     var pos = {
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude
        //     };
        //
        //     // custom icon for users location.
        //     let userIcon = {
        //         url: 'blue_MarkerA.png',
        //         scaledSize: new window.google.maps.Size(50, 50), // scaled size
        //         origin: new window.google.maps.Point(0, 0), // origin
        //         anchor: new window.google.maps.Point(0, 50),
        //         labelOrigin: new window.google.maps.Point(25, -5) // anchor
        //     }

            // Set the marker on the map for the user, add animation and set position of custom label
            new window.google.maps.Marker({
                position: {
                    lat: 35.227,
                    lng: -80.8425
                },
                map: map,
                //icon: '/blue_MarkerA.png',
                animation: window.google.maps.Animation.DROP,
                animation: window.google.maps.Animation.BOUNCE,
                title: "Your Location!",
            })
            
            this.setState({map: map});
            // Recenter the map to the users location.
            // map.setCenter(position : {
            //     lat: 37.789,
            //     lng: -121.405
            // })
            // fetch('https://warm-falls-44996.herokuapp.com/search/restaurants')
            // // fetch('https://itunes.apple.com/search?term=justin+bieber&limit=25')
            //     .then(res => res.json()).then(response => {
            //     console.log(response.businesses)
            //     // dispatch(getRestaurants(response.results));
            //     let resp = response.businesses

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

                // for (let i = 0; i < resp.length; i++) {
                //     let marker
                //     let markers = []
                //     // set markers for each result from api
                //     markers.push(marker = new window.google.maps.Marker({
                //         position: { // coordinates from geocoding
                //             lat: resp[i].coordinates.latitude,
                //             lng: resp[i].coordinates.longitude
                //         },
                //         title: resp[i].name,
                //         animation: window.google.maps.Animation.DROP,
                //         map: map, // map object we created in initMap
                //         //icon: '/paleblue_MarkerR.png ',
                //     }))
                //
                //     // // set the window popup for each marker with info and add listener
                //     const infoWindow = new window.google.maps.InfoWindow();
                //     marker.addListener('click', function(index) {
                //
                //         const content = `
                //                 <div id="infoWindow">
                //                     <div><strong><h2>${resp[i].name}</h2></strong>
                //                     <strong>Rating: ${resp[i].rating}</strong><br>
                //                     <p>${resp[i].location.display_address[0]}<br> ${resp[i].location.display_address[1]}<p>
                //                         <button><a href="/userDetails/${i}"">View Menu<a/></button>
                //             </div>
                //                 <div>
                //                     <img height="133" width="120" src=${resp[i].image_url} alt="Restaurant">
                //             </div>
                //             </div>
                //                 `
                //         infoWindow.setContent(content)
                //         infoWindow.open(map, this)
                    //})

                //}
            //})
        //});
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
                       map: this.state.map,      // map object we created in initMap
                     });
                     const infoWindow = new window.google.maps.InfoWindow()


                marker.addListener('click', function() {

                    const content = `
                        <div id="infoWindow">
                            <div>
                                <strong><h2>${places[i].name}</h2></strong>
                                <strong><img class="star-rating" src=${ star }> ${places[i].rating}</strong><br>
                                <p>${places[i].display_address}<br><p>
                                    <button><a  href="/userDetails/${i}">View Menu<a/></button>
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
        // console.log(this.props.restaurantList)

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
