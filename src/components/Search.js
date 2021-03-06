import React, { Component } from 'react';

// Connect redux and react
import { connect } from 'react-redux';

// Import the action
import { getRestaurants } from '../actions';

// Import Components
import ListView from './ListView';
import MapView from './MapView';

// Import routing
import { Link, Route, Switch, Redirect } from 'react-router-dom';



class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: [],
            showFilter: true,
        };
    }

// On page load, fetch all restaurants. Pass 'restaurants' down as props to ListView & MapView
    componentDidMount() {
        console.log('componentDidMount works')
        this.props.getRestaurants()
    }


    render() {

        return (
            <div>
                <nav className="toggle-search-and-map-view">
                    <Link to="/search/ListView"><button>List View</button></Link>
                    <Link to="/search/MapView"><button>Map View</button></Link>
                </nav>

                <Switch>
                    <Route path="/search/listView" render={() => <ListView restaurants={this.props.restaurantList} /> } />
                    <Route path="/search/mapView" render={() => <MapView restaurants={this.props.restaurantList} /> } />
                    <Redirect from='/search' to="/search/ListView" />
                </Switch>
            </div>
        );
    }
}


// Create a state called restaurantList that gets its data from state.restaurantList
function state2Props(state) {
    return {
        restaurantList: state.restaurantList,
    };
}


// Dispatch the response from the API fetch request to the getRestaurants action creator
function dispatch2Props(dispatch) {
    return {
        getRestaurants() {
            fetch('https://warm-falls-44996.herokuapp.com/restaurants?lat=35.227&lng=-80.8425')
                .then(res => res.json())
                .then(response => {
                    dispatch(getRestaurants(response));
                })
                .catch(err => console.error(err))    
        }
    };
}


export default connect(state2Props, dispatch2Props)(Search);
