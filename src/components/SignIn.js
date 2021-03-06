import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import FoodFacts  from './foodFacts'

class SignIn extends Component {

    handleSubmit = () => {
         this.props.history.push("/search");
    }


    render() {
        return (
            <div className="sign-in-view">
                 <p><FoodFacts /></p>
                <div id="sign-in">
                    <input type="email" placeholder="Email" required="required"/>
                    <input type="password" placeholder="Password" required="required"/>
                    <button onClick={() => this.handleSubmit()} type="submit">Sign In</button>
                    <h5><a href="">Forgot Password?</a></h5>
                </div>
            </div>
        );
    }
}

function MapState2Props(state) {
    return {authenticated: state.authenticated}
}

export default connect(MapState2Props, actions)(SignIn)
