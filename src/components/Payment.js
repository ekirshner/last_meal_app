import React, { Component } from 'react';

// Import routing
import { Link } from 'react-router-dom';

// TO DO: 
    // 1) Figure out how to populate the data (from backend? from store?)


class Payment extends Component {

    render() {
        
        return (
            <div>
                <Link to="/search"><p>Back to Search</p></Link>
                <div className="payment-section">
                    
                    <h2>Payment Details</h2>
                    <p>(dynamically populate order details here)</p>
                    <p>Total:  (dynamically populate price)</p>
                    
                    <div className="payment-form">
                        <label hmtlFor="name"> Cardholder Name </label>
                        <input type="text" name="name"/>
                        <label htmlFor="card"> Card Number </label>
                        <input type="text" name="card" placeholder="Valid Card Number"/>
                        <label htmlFor="date"> Expiration Date </label>
                        <input type="number" name="date" placeholder="MM/YYYY" />
                        <label htmlFor="cvv"> CVV </label>
                        <input type="password" name="cvv" placeholder="CVC" />
                    </div>

                    <Link to="/paymentConfirmation"><button>Order</button></Link>
                </div>
            </div>
        );
    }
}

export default Payment;