import React, {Component} from 'react';

// Import routing
import { Link } from 'react-router-dom';

// Connect redux and react
import { connect } from 'react-redux';


class Payment extends Component {
constructor(){
    super()

}

    render() {

        
        console.log(this.props.order)
        const theOrder = this.props.order.map((item, index) => {
            return (
                <li key={ index }>{ item }</li>
            )}
        )

        return (
            <div>

                <Link to="/search"><p>Back to Search</p></Link>
                <div className="payment-section">

                    <h2>Payment Details</h2>
                    <p>Order Details</p>
                    <ul>
                    { theOrder }
                    </ul>

                    <p>Total:  <span>(dynamically populate price)</span></p>

                    <div className="payment-form">
                        <label hmtlFor="name"> Cardholder Name </label>
                        <input type="text" name="name"/>
                        <label htmlFor="card"> Card Number </label>
                        <input type="text" name="card" placeholder="Valid Card Number"/>
                        <label htmlFor="date"> Expiration Date </label>
                        <input type="text" name="date" placeholder="MM/YYYY" />
                        <label htmlFor="cvv"> CVV </label>
                        <input type="password" name="cvv" placeholder="CVC" />
                        
                        <Link to="/paymentConfirmation"><button>Order</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}


// Create a state called lots that gets its data from state.restaurantList
function state2Props(state) {
    return {
        order: state.order,
    };
}

export default connect(state2Props, null) (Payment);
