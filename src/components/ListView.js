import React, { Component } from 'react';

// Import routing
import { Link } from 'react-router-dom';

import star from '../Star.png';


class ListView extends Component {

    render() {

        // Map over fetched restaurants and populate below
        if(this.props.restaurants) {

        const restaurants = this.props.restaurants.map((restaurant, index) => {
            return <div key={ index } className="list-view-divs">
                <div>
                    <img src={ restaurant.image_url } alt="" />
                </div>

                <div className="container">
                    <div className="details">
                        <h3>{ restaurant.name }</h3>
                        <p className="details-2"><span>{ restaurant.price }</span> <span><img className="star-rating" src={ star }/>{ restaurant.rating }</span></p>
                        <p>{ restaurant.display_address}</p>
                            </div>
                            <div className="button">
                                <Link to={ "/userDetails/" + index } ><button>Details</button></Link>
                            </div>
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
