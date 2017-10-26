import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import FoodFacts  from './foodFacts'

class SignIn extends Component {
// change
    // renderButton() {
    //     console.log(this.props.authenticated)
    //     if (this.props.authenticated === false) {
    //         return <button onClick={() => this.props.authenticate(true)} type="submit">Sign In</button>
    //             }
    //     return <button onClick={() => this.props.authenticate(false)} type="submit">Sign Out</button>
    // }
    handleSubmit = () => {
         this.props.history.push("/search");
    }


    render() {
        // console.log(foodFacts)
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
