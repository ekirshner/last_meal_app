import React, { Component } from 'react';


class ListView extends Component {

    render() {
        // Map over fetched restaurants and populate below
        const restaurants = this.props.restaurants.map((restaurant, index) => {
            return <div key={ index }> 
                <h3>{restaurant.artistName}</h3>
                <img src={restaurant.artworkUrl100} />
                <p>{restaurant.trackCensoredName}</p>
                <button>Details</button>
                    </div>
        });


        return (
            <div>
                This is my super sweet restaurant list
                <div className="list-view-results">
                    { restaurants } 
                </div>
            </div>
        );
    }
}

export default ListView;