import React, { Component } from 'react';

import plus from '../add-icon.png';


class RestaurantDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addItemsVisible: true,
            setPickupTimeVisible: true,
        };
    }
    
    // When a user clicks the add item button, display the form
    toggleVisibility () {
        this.setState ({
            addItemsVisible: !this.state.addItemsVisible,
        });
    }

    // When a user clicks the change pickup time button, display the form
    toggleVisibilityPickup () {
        this.setState ({
            setPickupTimeVisible: !this.state.setPickupTimeVisible,
        });
    }

    render() {

        return (
            <div className="restaurant-details-component">
               
                <p>Welcome, (dynamically populate name here)!</p>

                <h2>(Dynamically Populate Restaurant Name)</h2>
                <p>(dynamically populate location)</p>

                 <h3>Set Pick Up Time</h3>
                 <p>(dynamically populate pickup times)</p>
                 <div className="add-item">
                    <img src={ plus } onClick={ () => this.toggleVisibilityPickup() } /> 
                    <p>Change Pick Up Time</p>
               </div>
               
                <div  hidden={ this.state.setPickupTimeVisible }>
                    <div className="add-item-dropdown">
                        <label>From</label>
                        <input type="time"/>
                        <label>Until</label>
                        <input type="time"/>
                        <button>Change</button>
                    </div>
                </div>


                <h3>Menu</h3>
                <div className="add-item">
                    <img src={ plus } onClick={ () => this.toggleVisibility() } /> 
                    <p>Add Item</p>
               </div>
               
                <div  hidden={ this.state.addItemsVisible }>
                    <div className="add-item-dropdown">
                    <label>Menu Item</label>
                    <input type="text" placeholder="Item Name" />
                    <label>Item Price  $</label>
                    <input type="number" min="1" max="10" placeholder="5"/>
                    <label>Total Availabile</label>
                    <input type="number" min="1" max="50" placeholder="5" />
                    <button>Add</button>
                    </div>
                </div>


                <h3> Current Menu Items </h3>
                <table>
                    <th>
                        <tr>
                            <td>$5</td>
                            <td>Sweet Potato Cassarole</td>
                            <td>4 left</td>
                        </tr>
                        <tr>
                            <td>$5</td>
                            <td>Green Beans</td>
                            <td>5 left</td>
                        </tr>
                    </th>
                </table>

            </div>
        );
    }
}

export default RestaurantDetails;