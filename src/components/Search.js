import React, { Component } from 'react';

// Connect redux and react
import { connect } from 'react-redux';

// Import the action
import { getRestaurants } from '../actions';

// Import Components
import ListView from './ListView';
import MapView from './MapView';
import Filter from './Filter';

// Import routing
import { Link, Route, Switch, Redirect } from 'react-router-dom';


class Search extends Component {
    constructor(props) {
        super(props);

        //default to list view
        this.state = {
            restaurants: [],
        };
    }

    componentDidMount() {
        console.log('componentDidMount works')
        this.props.getRestaurants()
    }

    render() {

        return (
            <div>
                This is Search!
                <nav className="toggle-search-and-map-view">
                    <Link to="/search/ListView"><button>List View</button></Link>
                    <Link to="/search/MapView"><button>Map View</button></Link>
                </nav>
                <Filter />

                <Switch>
                    <Route path="/search/listView" component={ ListView }/>
                    <Route path="/search/mapView" component={ MapView }/>
                    <Redirect from='/search' to="/search/ListView" />
                </Switch>
            </div>
        );
    }
}


// Create a state called lots that gets its data from state.parkingLots  
function state2Props(state) {
    return {
        restaurantList: state.restaurantList,
    };
}


// Dispatch the response from the API fetch request to the getLots action creator
function dispatch2Props(dispatch) {
    return {
        getRestaurants() {
            fetch('https://lotbot3000.herokuapp.com/lots')
                .then(res => res.json())
                .then(response => {
                    dispatch(getRestaurants(response));
                });
        }
    };
}


export default connect(state2Props, dispatch2Props)(Search);
