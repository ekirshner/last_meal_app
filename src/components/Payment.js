import React, {Component} from 'react';
import CreditCard from './creditcardform';


class Payment extends Component {
constructor(){
    super()

}
    render() {
        return (
            <div>

                <p>Good Job! You just saved 1.5lbs of food!</p>
                <CreditCard/>
            </div>
        )
    }
}

export default Payment;
