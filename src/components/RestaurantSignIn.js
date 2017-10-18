import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RestaurantSignIn extends Component {

    renderButton() {
        console.log(this.props.authenticated)
        if (this.props.authenticated === false) {
            return <button onClick={() => this.props.authenticate(true)} type="submit">Sign In</button>
                }
        return <button onClick={() => this.props.authenticate(false)} type="submit">Sign Out</button>
    }
    handleSubmit = () => {
         this.props.history.push("/RestaurantDetails");
     }
    render() {
        return (

            <div className="rest-sign-in-view">
                <h3>For Restaurant Owners</h3>
                <p>40% of food in the US is wasted!</p>
                <h2>Welcome Back!</h2>
                <form id="sign-in" onSubmit={()=> this.handleSubmit()}>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    {this.renderButton()}
                    <h5><a href="">Forgot Password?</a></h5>
                    <form>
                    </form>
                </form>

                <div>
                    <h5>Don't have an account? Register your restaurant
                        <a href=""> here!</a>
                    </h5>
                </div>
            </div>
        );
    }
}

function MapState2Props(state) {
    return {authenticated: state.authenticated}
}

export default connect(MapState2Props, actions)(RestaurantSignIn)
