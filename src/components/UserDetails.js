import React, { Component } from 'react';

// Connect redux and react
import { connect } from 'react-redux';

// Import routing
import { Link, Route, Switch } from 'react-router-dom';

// Import components
import Payment from './Payment';


// TO DO:
    // 1) Figure out how to send the selected menu options to either backend or store them
    // 2) Figure out how to send the price & either send or store (^^)
    // 3) IDEA: write a function that will add checkboxed item onClick to a string (or state). 
                // concat it each time you add, and then pass it through to Payment as 
                // /Payment:id where id = the state (or string)


class UserDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 5,
        };
    }

  

    render() {
    const index = this.props.match.params.id;
    const restaurant = this.props.restaurantList;

    

        return (
            <div className="restaurant-details">
                <p>{ restaurant[index].artistName }</p> 
                <img src={ restaurant[index].artworkUrl100 } alt="" />
                <p>{ restaurant[index].trackCensoredName }</p>

                <h2>Menu Options</h2>
                <ul>
                    <li>
                        <input type="checkbox" name="burger" value="burger"/>
                        <label htmlFor="burger"> Burger </label>
                    </li>
                    <li>
                        <input type="checkbox" name="homemade tofurkey jerky" value="homemadeTofurkeyJerky" />
                        <label htmlFor="homemade tofurkey jerkey"> Homemade Tofurkey Jerky </label>
                    </li>
                </ul>

                <Link to="/payment"><button>Buy</button></Link>

                <Switch>
                    <Route path="/payment" render={() => <Payment price={ this.props.total } />} />
                </Switch>
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
