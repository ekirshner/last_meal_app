import React, { Component } from 'react';

import check from '../checkmark.png';

// Import routing
import { Link } from 'react-router-dom';


class PaymentConfirmation extends Component {

    render() {

        let orderNumber = Math.floor((Math.random() * 10000000) + 5000000);

        return (

            <div>
                <Link to="/search"><p>Back to Search</p></Link>
                <div className="payment-conf">
                    <img src={ check } />
                    <h3>Payment Complete</h3>
                    <p> We have sent an email with all the details of your order. </p>

                    <div>
                        <p>Order Number:</p>
                        <p> { orderNumber }</p>
                        </div>

                </div>
            </div>
        );
    }
}

export default PaymentConfirmation;
