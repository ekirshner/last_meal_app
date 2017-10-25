import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/style.css';

// Import routing
import { Link, Route, Switch, withRouter } from 'react-router-dom';

// Import components
import Search from './components/Search';
import SignIn from './components/SignIn';
import UserDetails from './components/UserDetails';
import Payment from './components/Payment';
import PaymentConfirmation from './components/PaymentConfirmation';
import RestaurantSignIn from './components/RestaurantSignIn';
import RestaurantDetails from './components/RestaurantDetails';
import Transactions from './components/Transactions';
import logo from './logo.png';


class App extends Component {

  render() {
    console.log(this.props.location.pathname)

    return (
      <div className="App">

          <header>
              { this.props.location.pathname === '/' ? null : <p><Link to="/">Sign Out</Link></p>}
              <img src={ logo } />
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

