import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SignIn extends Component {

    renderButton() {
        console.log(this.props.authenticated)
        if (this.props.authenticated === false) {
            return <input onClick={() => this.props.authenticate(true)} type="submit" value="Sign In"/>
        }
        return <input onClick={() => this.props.authenticate(false)} type="submit" value="Sign Out"/>
    }
    render() {
        return (
            <div>
                <h4>Sign In</h4>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                {this.renderButton()}
                <p>Don't have an account? Register
                    <a href=""> here!</a>
                </p>
            </div>
        );
    }
}

function MapState2Props(state) {
    return {authenticated: state.authenticated}
}

export default connect(MapState2Props, actions)(SignIn)
