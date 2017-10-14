import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class CreditCard extends Component {

renderCardForm() {
   return (
       <form className="CardForm" onSubmit={ this.handleSubmit }>
           <div>
               <input type="text"
                   ref="name"
               placeholder="Name on Card" />
           </div>
           <div>
               <input
                   type="text"
                   ref="number"
                   placeholder="Card Number"
               />
           </div>
           <div>
               <input
                   type="text"
                   ref="expiration"
                   placeholder="MM/YYYY"
               />
           </div>
           <div>
               <input
                   type="text"
                   ref="cvc"
                   placeholder="CVC"
               />
           </div>
           <button type="submit">Submit Payment</button>
   </form>);
 }
 handleSubmit = () => {
      this.props.history.push("/PaymentConfirmation");
  }
 render() {
   return (
       <div className="CreditCard">
           { this.renderCardForm() }
   </div>);
 }
}

export default withRouter(CreditCard);
