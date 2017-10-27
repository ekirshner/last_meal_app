import React, { Component } from 'react';

// Connect redux and react
import { connect } from 'react-redux';

// Import routing
import { Link, Route, Switch } from 'react-router-dom';

// Import components
import Payment from './Payment';
import star from '../Star.png';

// Import action
import { buyFood, getRestaurants } from '../actions';



// ComponentWill UnMount = to get rid of the redux store state


class UserDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foods: [],
            selected: [],
        };
    }

    onToggleFood(ev, index) {
        const selected = this.state.selected.slice(); // copy the array
        selected[index] = ev.target.checked; // boolean (true if checked)

        this.setState({
            selected,
        });
    }

    onBuy() {
        // Filter down the food so that only the checked items remain
        const foodToPurchase = this.state.foods.filter((itemNumber, index) => {
            return this.state.selected[index];
        })
        // Send the filtered array of food to the buyFood dispatch function
        this.props.buyFood(foodToPurchase)
    }

    // Convert military time to standard time
    tConvert(timeString) {
        let hourEnd = timeString.indexOf(":");
        let H = +timeString.substr(0, hourEnd);
        let h = H % 12 || 12;
        let ampm = (H < 12 || H === 24) ? "AM" : "PM";
        timeString = h + timeString.substr(hourEnd, 3) + ampm;

        return timeString;
    }

    // Once the page loads, import the data for the restaurant selected from search. 
    componentDidMount() {
        if (this.props.restaurantList.length === 0) {
            this.props.getRestaurants()
                .then(() => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        const index = this.props.match.params.id;
        const currentRestaurant = this.props.restaurantList[index];
        
        // Set the this.state.foods to an array of the restaurant's inventory
        this.props.restaurantList.length && this.setState({
            foods: currentRestaurant.inventory,
        }, () => 
        console.log(this.state.foods))

        // Set this.state.selected to an array of the same length as foods (values set to false)
        let newArr = []
        for(let i = 0; i <= this.state.foods.length; i++) {
            newArr.push(false)
        }

        this.setState({
            selected: newArr,
        }, () => console.log(this.state.checked))
    }

  

    render() {

        if(this.props.restaurantList[this.props.match.params.id] !== undefined) {
           
            const index = this.props.match.params.id;
            const currentRestaurant = this.props.restaurantList[index];

            const menu = this.state.foods.map((food, index) => {
                if(food.num_available > 0) {
                    return (
                        <li key={ index }>
                            <input type="checkbox" 
                                onChange={ event => this.onToggleFood(event, index) } 
                                checked={ this.state.selected[index] } />
                            <label htmlFor={ food.description }> ${ food.price } - { food.description } </label>
                        </li>
                    )
                }
            });

            return (
                <div>
                    <Link to="/search"><p>Back to Search</p></Link>
                    <div className="restaurant-details">
                        <div className="restaurant-info-section">
                            <h2>{ currentRestaurant.name }</h2> 
                            <p className="price-and-rating"><span>{ currentRestaurant.price }</span><span>{ currentRestaurant.display_phone }</span> <span><img src={ star }/>{ currentRestaurant.rating }</span></p>
                            <p>{ currentRestaurant.display_address }</p>
                            <img className="restaurant-pic" src={ currentRestaurant.image_url } alt=''/>
                        </div>

                        <div className="restaurant-menu-section">
                            <h3>Menu Options</h3> 
                            <p>Pick Up Time <span>{ this.tConvert(currentRestaurant.inventory[0].pickup_start) } - { this.tConvert(currentRestaurant.inventory[0].pickup_end) }</span></p>
                            <ul>
                                { menu } 
                            </ul>
                        </div>

                        <p className="buy"><Link to={ "/payment" }> <button onClick={ () => this.onBuy() }>Buy</button></Link></p>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    Loading..
                </div>
            )
        }
    }
}


// Create a state called restaurantList that gets its data from state.restaurantList  
function state2Props(state) {
    return {
        restaurantList: state.restaurantList,
    };
}


// Dispatch the buyFood action creator
function dispatch2Props(dispatch) {
    return {
        buyFood: foods => {
            dispatch(buyFood(foods))
        },

        getRestaurants: () => {
            return fetch('https://warm-falls-44996.herokuapp.com/restaurants?lat=35.227&lng=-80.8425')
                .then(res => res.json())
                .then(response => {
                    dispatch(getRestaurants(response));
                })
                .catch(err => console.error(err))  
        }  
    }
}


export default connect(state2Props, dispatch2Props)(UserDetails);
