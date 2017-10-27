import React, { Component } from 'react';
import { addRestaurant } from '../actions';
import FoodFacts from './foodFacts';

// Connect redux and react
import { connect } from 'react-redux';

// Import routing
import { Link } from 'react-router-dom';


class RestaurantSignIn extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = (event) => {

        const username = this.state.email
        const password = this.state.password

        fetch('https://warm-falls-44996.herokuapp.com/restaurant-signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username: username,
                password: password,
                })
            })
            .then(res=> res.json())
            .then(response=> {
                console.log(response)
                this.props.getRestaurant(response);
            })

        this.props.history.push("/RestaurantDetails");
        event.preventDefault()
    }

    handleChange(event) {
        this.setState({
             email: event.target.value,
        })
    }

    handlePasswordChange(event) {
        this.setState({
             password: event.target.value,
        })
    }


    render() {

        return (
            <div className="rest-sign-in-view">
                <div>
                    <p><FoodFacts /></p>
                </div>

                <form id="sign-in" onSubmit={ (ev)=> this.handleSubmit(ev) }>
                    <input type="email" placeholder="Email"
                        value={ this.state.email }
                        onChange={ (e)=> this.handleChange(e) }/>
                    <input type="password" placeholder="Password"
                        value={this.state.password}
                        onChange={ (e)=>this.handlePasswordChange(e) }/>
                    <button type="submit">Sign In</button>
                    <h5><a href="">Forgot Password?</a></h5>
                </form>

                <div>
                    <h5>Don't have an account? Register your restaurant
                        <Link to="/Registration"> here!</Link>
                    </h5>
                </div>
            </div>
        );
    }
}


function MapState2Props(state) {
    return {restaurant: state.restaurant}
}


function dispatch2Props(dispatch) {
    return {
        getRestaurant: restaurant => {
            dispatch(addRestaurant(restaurant))
        }
    }
}

export default connect(MapState2Props, dispatch2Props)(RestaurantSignIn)
