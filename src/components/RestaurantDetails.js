import React, { Component } from 'react';

import plus from '../add-icon.png';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

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
         console.log('deleted!')
         const url= 'https://warm-falls-44996.herokuapp.com/inventory/'+index
         fetch(url , {
             method: 'DELETE',
             credentials: 'include',
             headers: {
             'Content-Type': 'application/json',
         },
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
    console.log(event.target.value)
    this.setState({
        pickup_time: event.target.value + ":00",
    })
}
handleChange2(event) {
    this.setState({
        pickup2_time: event.target.value + ":00",
    })
}
handleClick() {
    console.log(this.state.pickup_time, this.state.pickup2_time)
}
handleItemClick(){
    console.log(this.props.restaurant)
    console.log(this.state.description, this.state.price, this.state.num_available)
    console.log(this.state.pickup_time, this.state.pickup2_time)
    fetch('https://warm-falls-44996.herokuapp.com/inventory', {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json',
    },
//mode: 'no-cors',
  body: JSON.stringify({
                description: this.state.description,
                num_available: parseInt(this.state.num_available),
                pickup_start: this.state.pickup_time,
                pickup_end: this.state.pickup2_time,
                price: parseInt(this.state.price),

            })
})
}
handlePriceChange(event) {
    this.setState({
        price: event.target.value,
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

        console.log(this.props.restaurant.inventory[0])

const items = this.props.restaurant.inventory.map((item, index)=> {
    console.log(item.price)
    if(item.num_available > 0) {
    return(
    <tr key={index}>
        <td onClick={ () => this.onDeleteClick(item.id) }><img className="delete" src={ plus }/></td>
        <td>${item.price}</td>
        <td>{item.description}</td>
        <td>{item.num_available}</td>
    </tr>)
}
})
        return (
            <div className="restaurant-details-component">
                <p className="welcome">Welcome, {this.props.restaurant.name}!</p>
                <h2>{this.props.restaurant.name}</h2>
                <p className="location">{this.props.restaurant.display_address}</p>

                <Row className="show-grid">
                    <Col xs={12} md={6} lg={6}>
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
                                    <input type="time"
                                        value= { this.state.pickup_time }
                                        onChange={ (ev)=> this.handleChange(ev) }
                                    />
                                    <label>Until</label>
                                    <input type="time"
                                        value= { this.state.pickup2_time }
                                        onChange={ (ev)=> this.handleChange2(ev) }
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
                                        value= {this.state.description}
                                        onChange={ (ev)=>this.handleItemChange(ev) }/>
                                    <label>Item Price  $</label>
                                    <input type="number" min="1" max="10" placeholder="5"
                                        value= { this.state.price }
                                        onChange={ (ev)=> this.handlePriceChange(ev) }/>
                                    <label>Total Availabile</label>
                                    <input type="number" min="1" max="50" placeholder="5"
                                        value={ this.state.num_available }
                                        onChange={ (ev)=> this.handleNumAvailable(ev) }/>
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
                                    {items}
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
export default connect(MapState2Props, null)(RestaurantDetails);
