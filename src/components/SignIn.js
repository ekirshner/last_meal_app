import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SignIn extends Component {
// change
    renderButton() {
        console.log(this.props.authenticated)
        if (this.props.authenticated === false) {
            return <button onClick={() => this.props.authenticate(true)} type="submit">Sign In</button>
                }
        return <button onClick={() => this.props.authenticate(false)} type="submit">Sign Out</button>
    }
    handleSubmit = () => {
         this.props.history.push("/search");
     }
    render() {
        return (
            <div className="sign-in-view">
                <p>If food waste was a country, it would be the third largest emitter of greenhouse gases behind US and China.</p>
                <form id="sign-in" onSubmit={()=> this.handleSubmit()}>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    {this.renderButton()}
                    <h5><a href="">Forgot Password?</a></h5>
                </form>

                <div>
                    <h5>Don't have an account? Register
                        <a href="/RestaurantSignIn"> here!</a>
                    </h5>
                </div>
            </div>
        );
    }
}

function MapState2Props(state) {
    return {authenticated: state.authenticated}
}

export default connect(MapState2Props, actions)(SignIn)
