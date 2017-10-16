import React, { Component } from 'react';


class PaymentConfirmation extends Component {

    handleBack(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div>
                <input type="button" value="Back" onClick={()=> this.handleBack()} />

               Conffffff those payment deets
            </div>
        );
    }
}

export default PaymentConfirmation;
