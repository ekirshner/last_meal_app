import React, { Component } from 'react';

// Connect redux and react
import { connect } from 'react-redux';


class UserDetails extends Component {

    render() {

    const index = this.props.match.params.id;
    const restaurant = this.props.restaurantList;

        return (
            <div className="restaurant-details">
                <p>{ restaurant[index].artistName }</p> 
                <img src={restaurant[index].artworkUrl100 } alt="" />
                <p>{ restaurant[index].trackCensoredName }</p>
            </div>
        );
    }
}


// Create a state called lots that gets its data from state.restaurantList  
function state2Props(state) {
    return {
        restaurantList: state.restaurantList,
    };
}


export default connect(state2Props, null)(UserDetails);
