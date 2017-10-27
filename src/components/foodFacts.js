import React, { Component } from 'react';
import { foodFacts } from '../facts'

class FoodFacts extends Component {

    renderFacts() {
        return (
            foodFacts[Math.floor(Math.random() * 9)]
        )
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                {  this.renderFacts() }
            </div>
        );
    }
}

export default FoodFacts;