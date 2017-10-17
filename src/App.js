import React, { Component } from 'react';
import './styles/style.css';


// Import routing
import { Route, Switch, withRouter } from 'react-router-dom';

// Connect redux and react
// import { connect } from 'react-redux';

// Import the action
// import { getLots } from './actions';

// Import components
import Search from './components/Search';
import SignIn from './components/SignIn';
import UserDetails from './components/UserDetails';
import Payment from './components/Payment';
import PaymentConfirmation from './components/PaymentConfirmation';
import RestaurantSignIn from './components/RestaurantSignIn';
import RestaurantDetails from './components/RestaurantDetails';
import Transactions from './components/Transactions';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <h1> Last Meal, Great Deal! </h1>
        </header>

        <main>
            <Switch>
              <Route path="/search" component={ Search } />
              <Route path="/userDetails/:id" component={ UserDetails } />
              <Route path="/paymentConfirmation" component={ PaymentConfirmation } />
              <Route path="/payment" component={ Payment } /> 

              <Route path="/restaurantSignIn" component={ RestaurantSignIn } />
              <Route path="/restaurantDetails" component={ RestaurantDetails } />
              <Route path="/transactions" component={ Transactions } />
              <Route path="/" component={ SignIn } />
            </Switch>
          </main>
      </div>
    )
  }
}

export default withRouter(App);
