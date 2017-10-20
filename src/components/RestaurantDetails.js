import React, { Component } from 'react';

import plus from '../add-icon.png';
import { Grid, Row, Col } from 'react-bootstrap';


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

    // When a user clicks delete, send a DELETE request to backend
    onDeleteClick(id, url) {
         console.log('deleted!')
        // return fetch(url + id, {
        //     method: 'delete'
        // }).then(response => response.json()
        //                                             // .then(json=> {
                                                        // return json; <--? do we need this?
                                                        // }
    // )
       
                                                         // );
    }

    render() {

        return (
            <div className="restaurant-details-component">
                <p className="welcome">Welcome, (dynamic name)!</p>
                <h2>(Dynamically Populate Restaurant Name)</h2>
                <p className="location">(dynamically populate location)</p>

                <Row className="show-grid">
                    <Col xs={6} md={6}>
                        <div>
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
                        </div>

                        <div className="menu-section">
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
                        </div>
                    </Col>


                    <Col xs={6} md={6}>
                        <section className="current-menu">
                            <h3> Current Menu Items </h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td onClick={ () => this.onDeleteClick() }><img className="delete" src={ plus }/></td>
                                        <td>$5</td>
                                        <td>Sweet Potato Cassarole</td>
                                        <td>4 left</td>
                                    </tr>
                                    <tr>
                                        <td onClick={ () => this.onDeleteClick() }><img className="delete" src={ plus }/></td>
                                        <td>$5</td>
                                        <td>Green Beans</td>
                                        <td>5 left</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </Col>
                </Row> 
            </div>
        );
    }
}

export default RestaurantDetails;