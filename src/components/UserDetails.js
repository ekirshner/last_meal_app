import React, { Component } from 'react';

// Connect redux and react
import { connect } from 'react-redux';

// Import routing
import { Link, Route, Switch } from 'react-router-dom';

// Import components
import Payment from './Payment';

// Import action
import { buyFood } from '../actions';


// TO DO:
// 1) Figure out how to send the selected menu options to either backend or store them
// 2) Figure out how to send the price & either send or store (^^)
// 3) IDEA: write a function that will add checkboxed item onClick to a string (or state). 
// concat it each time you add, and then pass it through to Payment as 
// /Payment:id where id = the state (or string)

// ComponentWill UnMount = to get rid of the redux store state


class UserDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 5,
            // foods: ['tofurkey jerky', 'burger'],
            // selected: [false, false],
            foods: [],
            selected: [],
            purchasedFood: ['fooood'],
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

    // Once the page loads, import the data for the restaurant selected from search. 
    // Map over the menu items, and set the array to this.state.food's state. 
    // Set this.state.selected's state to an array of the same length where all the values are set to false
    componentDidMount() {
        const index = this.props.match.params.id;
        console.log(this.props.restaurantList[index])
    }

    render() {
        
        const restaurant = this.props.restaurantList;

    

        const foods = this.state.foods.map((food, index) => {
            return (
                <li key={ index }>
                    <input key={ index } type="checkbox" onChange={ event => this.onToggleFood(event, index) } checked={ this.state.selected[index] } name={ food } value={ food } />
                    <label htmlFor={ food }> { food } </label>
                </li>
            )
        });

        return (
            <div className="restaurant-details">
                {/* <p>{ restaurant[index].artistName }</p> 
                <img src={ restaurant[index].artworkUrl100 } alt="" />
                <p>{ restaurant[index].trackCensoredName }</p> */}

                <h2>Menu Options</h2>
                <ul>
                    {foods}
                </ul>

                 <Link to={"/payment"}> <button onClick={ () => this.onBuy() }>Buy</button></Link> 
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


// Dispatch the buyFood action creator
function dispatch2Props(dispatch) {
    return {
        buyFood: foods => {
        dispatch(buyFood(foods))
        }
    }
}


export default connect(state2Props, dispatch2Props)(UserDetails);
