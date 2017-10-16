import React, { Component } from 'react';

// Import routing
import { Link } from 'react-router-dom';


class ListView extends Component {

    render() {
        // Map over fetched restaurants and populate below
        if(this.props.restaurants) {
        const restaurants = this.props.restaurants.map((restaurant, index) => {
            return <div key={ index } className="list-view-divs"> 
                        <div>
                            <img src={restaurant.artworkUrl100} alt="" /> 
                        </div>
                        <div>
                            <h3>{restaurant.artistName}</h3>
                            <p>{restaurant.trackCensoredName}</p>
                            <Link to={"/userDetails/" + index} ><button>Details</button></Link>
                        </div>
                    </div>
        });


        return (
            <div>
                <div className="list-view-results">
                    { restaurants } 
                </div>
            </div>
        );
        } else {
                return (
                    <div>Loading... </div>
                );
        }
    } 
}

export default ListView;