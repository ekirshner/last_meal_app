import React, { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchText: '',
            yelpId: '',
            username: '',
            password: '',
        };
    }

    // Search for a restaurant by name 
    handleSearch(event) {
        this.setState ({
            searchText: event.target.value
        });
    }

    // Search for restaurant by Yelp ID
    handleYelpSearch(event) {
        this.setState ({
            yelpId: event.target.value
        });
    }

    // Update Username
    handleUsernameChange(event) {
        this.setState ({
            username: event.target.value
        });
    }

    // Update Password
    handlePasswordChange(event) {
        this.setState ({
            password: event.target.value
        });
    }

    // Submission
    handleSubmit() {
        // what happens?
    }


    render() {
        return (
            <div className="registration-component">
                <h3>Are you ready to join Last Meal, Great Deal?</h3> 

                <div className="searchbar">
                    <p> <input type="text" placeholder="Search by Name" value={ this.state.searchText } 
                            onChange={ (event) => this.handleSearch(event) }/> </p> 
                    <p><span>or enter your Yelp ID</span> <input type="text" placeholder="xxxx" value={ this.state.yelpId } 
                            onChange={ (event) => this.handleYelpSearch(event) }/></p>
                </div>

                <div className="registration-form">
                    <input type="email" placeholder="Email Address" value={ this.state.username }
                        onChange={ (event) => this.handleUsernameChange(event) }/>
                    <input type="password" placeholder="Create A Password" value={ this.state.password }
                        onChange={ (event) => this.handlePasswordChange(event) }/>
                    <input type="password" placeholder="Confirm Password" />
                    <button onClick={ () => this.handleSubmit() }>Register</button>
                </div>
            </div>
        );
    }
}

export default Registration;