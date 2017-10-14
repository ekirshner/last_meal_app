import React, {Component} from 'react';
import CreditCard from './creditcardform';
import BackButton from './backbutton';

class Payment extends Component {
constructor(){
    super()
    
}
    render() {
        return (
            <div>
                <BackButton />
                <p>Good Job! You just saved 1.5lbs of food!</p>
                <CreditCard/>
            </div>
        )
    }
}

export default Payment;
