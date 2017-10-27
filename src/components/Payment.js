import React, {Component} from 'react';

// Import routing
import { Link } from 'react-router-dom';

// Connect redux and react
import { connect } from 'react-redux';



class Payment extends Component {
    constructor(){
        super()

        this.state = {
            money: 0,
        };
    }


    componentWillMount() {
        let priceCount = 0.0;

        const theOrder = this.props.order.map((item, index) => {
            priceCount += parseFloat(item.price);

            return (
                <div></div>
            )}
        )
        this.setState({
            money: parseFloat(priceCount).toFixed(2),
        });
    }

    // Back Button
    handleBack () {
        this.props.history.go(-1)
    }


    render() {

        let totalSaved = (Math.floor(Math.random() * 500) / 100).toFixed(2);

        const theOrder = this.props.order.map((item, index) => {

            return (
                <li key={ index }>{ item.description }</li>
            )}
        )


        return (
            <div>
                <Link to="/search"><p>Back to Search</p></Link>
                <div className="payment-section">
                    <p className="back-button" onClick={ () => this.handleBack() }> Back </p>
                    <h2>Payment Details</h2>
                    <p className="order-details">Order Details</p>
                    <ul>
                        { theOrder }
                    </ul>
                    <p className="total">Total:  <span>${ this.state.money }</span></p>
                    <p className="saved">You saved { totalSaved } pounds of food!</p>

                    <div className="payment-form">
                        <label> Cardholder Name </label>
                        <input type="text" name="name"/>
                        <label> Card Number </label>
                        <input type="text" name="card" placeholder="Valid Card Number"/>
                        <label> Expiration Date </label>
                        <input type="text" name="date" placeholder="MM/YYYY" />
                        <label> CVV </label>
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
