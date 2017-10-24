import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions';
// import axios from 'axios';

class RestaurantSignIn extends Component {
constructor(){
    super()
    this.state = {
        email: "",
        password: "",
    }
}
    // renderButton() {
    //     console.log(this.props.authenticated)
    //     if (this.props.authenticated === false) {
    //         return <button onClick={() => this.props.authenticate(true)} type="submit">Sign In</button>
    //             }
    //     return <button onClick={() => this.props.authenticate(false)} type="submit">Sign Out</button>
    // }
    handleSubmit = () => {

        const username = this.state.email
        const password = this.state.password

    fetch('https://warm-falls-44996.herokuapp.com/restaurant-signin', {
        method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
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

}
// .catch(()=>{
//         //if request is bad show error
//         //show an error to user
//         console.log('badLogin')
//
//     })

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

     handleClick() {

//         const username = this.state.email
//         const password = this.state.password
//
//     fetch('https://warm-falls-44996.herokuapp.com/restaurant-signin', {
//         method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//       username: username,
//       password: password,
// })
// })
// .then(res=> res.json())
// .then(response=> {
//     console.log(response)
// })
// .catch(()=>{
//         //if request is bad show error
//         //show an error to user
//         console.log('badLogin')
//     })
     }
    render() {
        console.log(this.state.email)
        console.log(this.state.password)

        return (

            <div className="rest-sign-in-view">
                <h3>For Restaurant Owners</h3>
                <p>40% of food in the US is wasted!</p>
                <h2>Welcome Back!</h2>
                <form id="sign-in" onSubmit={()=> this.handleSubmit()}>
                    <input type="email" placeholder="Email"
                        value={this.state.email}
                        onChange={(e)=> this.handleChange(e)}/>
                    <input type="password" placeholder="Password"
                        value={this.state.password}
                        onChange={(e)=>this.handlePasswordChange(e)}/>
                    <button onClick={() => this.handleClick()} type="submit">Sign In</button>
                    <h5><a href="">Forgot Password?</a></h5>

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
