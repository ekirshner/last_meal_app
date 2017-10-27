import React, { Component } from 'react';

import plus from '../add-icon.png';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addRestaurant } from '../actions';

class RestaurantDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addItemsVisible: true,
            setPickupTimeVisible: true,
            pickup_time: "",
            pickup2_time: "",
            description: "",
            num_available: "",
            price: "",

        };
    }

    // When a user clicks delete, send a DELETE request to backend
    onDeleteClick(index) {
        //  console.log('deleted!')
        const url= 'https://warm-falls-44996.herokuapp.com/inventory/'+ index
        fetch(url , {
             method: 'DELETE',
             credentials: 'include',
             headers: {
             'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
            .then(response => {
                this.props.getRestaurant(response);
        })
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

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({
            pickup_time: event.target.value + ":00",
        })
    }

    handleChange2(event) {
        this.setState({
            pickup2_time: event.target.value + ":00",
        })
    }

    // Edit the Pickup Times
    handleClick() {
        if (this.state.pickup_time.length === 0 || this.state.pickup2_time.length === 0) {
            return;
        }

        // console.log(this.state.pickup_time, this.state.pickup2_time)
        fetch('https://warm-falls-44996.herokuapp.com/inventory/15', {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
                description: this.props.restaurant.inventory[0].description,
                num_available: parseInt(this.props.restaurant.inventory[0].num_available),
                pickup_start: this.state.pickup_time,
                pickup_end: this.state.pickup2_time,
                price: parseFloat(this.props.restaurant.inventory[0].price),
            })
        })
            .then(res => res.json())
            .then(response => {
                this.props.getRestaurant(response);
        })
    }

    // Add Menu Item
    handleItemClick() {
        if (this.state.description.length === 0 || this.state.num_available.length === 0 || this.state.price.length === 0) {
            return;
        }

        fetch('https://warm-falls-44996.herokuapp.com/inventory', {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
                description: this.state.description,
                num_available: parseInt(this.state.num_available),
                pickup_start: this.props.restaurant.inventory[0].pickup_start,
                pickup_end: this.props.restaurant.inventory[0].pickup_end,
                price: parseFloat(this.state.price),
            })
        })
            .then(res => res.json())
            .then(response => {
                this.props.getRestaurant(response);
        })
    }



    handlePriceChange(event) {
        this.setState({
            price: parseFloat(event.target.value),
        })
    }

    handleNumAvailable(event) {
        this.setState({
            num_available: event.target.value,
        })
    }

    handleItemChange(event) {
        this.setState({
            description: event.target.value,
        })
    }

    render() {
        if (!this.props.restaurant.inventory) {
                return <div />;
        }

        const items = this.props.restaurant.inventory.map((item, index)=> {
            if(item.num_available > 0) {
                return(
                    <tr key={ index }>
                        <td onClick={ () => this.onDeleteClick(item.id) }><img className="delete" src={ plus }/></td>
                        <td>${ item.price }</td>
                        <td>{ item.description }</td>
                        <td>{ item.num_available } remaining</td>
                    </tr>)
                }
        })

        // Convert military time to standard time
        function tConvert(timeString) {
            let hourEnd = timeString.indexOf(":");
            let H = +timeString.substr(0, hourEnd);
            let h = H % 12 || 12;
            let ampm = (H < 12 || H === 24) ? "AM" : "PM";
            timeString = h + timeString.substr(hourEnd, 3) + ampm;

            return timeString;
        }


        return (
            <div className="restaurant-details-component">
                <p className="welcome">Welcome, { this.props.restaurant.name }!</p>
                <div className="parallax">
                    <div className="restaurant-header">
                        <h2>{ this.props.restaurant.name }</h2>
                        <p className="location">{ this.props.restaurant.display_address }</p>
                    </div>
                </div> 

                <Row className="show-grid">
                    <Col xs={12} md={6} lg={6}>
                        <div>
                            <h3 id="edit">Set Pick Up Time</h3>
                            <p className="pickup-times">{ tConvert(this.props.restaurant.inventory[16].pickup_start) } - { tConvert(this.props.restaurant.inventory[16].pickup_end) } </p>
                            <div className="add-item">
                                <img src={ plus } onClick={ () => this.toggleVisibilityPickup() } />
                                <p>Change Pick Up Time</p>
                            </div>

                            <div  hidden={ this.state.setPickupTimeVisible }>
                                <div className="add-item-dropdown">
                                    <label>From</label>
                                    <input type="time"
                                        value= { this.state.pickup_time }
                                        onChange={ (ev)=> this.handleChange(ev) }
                                        required="required"
                                    />
                                    <label>Until</label>
                                    <input type="time"
                                        value= { this.state.pickup2_time }
                                        onChange={ (ev)=> this.handleChange2(ev) }
                                        required
                                    />
                                    <button onClick={ ()=>this.handleClick() }>Change</button>
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
                                    <input type="text" placeholder="Item Name"
                                        value= { this.state.description }
                                        onChange={ (ev)=>this.handleItemChange(ev) } required/>
                                    <label>Item Price  $</label>
                                    <input type="number" min="1" max="10" placeholder="5"
                                        value= { this.state.price }
                                        onChange={ (ev)=> this.handlePriceChange(ev) } required/>
                                    <label>Total Availabile</label>
                                    <input type="number" min="1" max="50" placeholder="5"
                                        value={ this.state.num_available }
                                        onChange={ (ev)=> this.handleNumAvailable(ev) } required/>
                                    <button onClick={ (ev)=>this.handleItemClick(ev) }>Add</button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <section className="current-menu">
                            <h3> Current Menu Items </h3>
                            <table>
                                <tbody>
                                    { items }
                                </tbody>
                            </table>
                        </section>
                    </Col>
                </Row>
            </div>
        );
    }
}

function MapState2Props(state) {
    return {
        restaurant: state.restaurant,
    }
}

function Dispatch2Props(dispatch) {
    return {
        getRestaurant: restaurant => {
            dispatch(addRestaurant(restaurant))
        }
    }
}


export default connect(MapState2Props, Dispatch2Props)(RestaurantDetails);
