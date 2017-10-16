import React, { Component } from 'react';

//TO DO: 
    // 1) Sort by.. location? pickup time?
    // 2) Filter by.. location?


class Filter extends Component {

    render() {
        return (
            <div className="filter-sort-component">
                <ul className="sort">
                    <p>Sort By</p>
                    <li>Distance</li>
                    <li>Pick Up Time</li>
                </ul>
                <ul className="filter">
                    <p>Filter By Distance</p>
                    <li>1 Mile</li>
                    <li>5 Miles</li>
                    <li>10 Miles</li>
                </ul>
            </div>
        );
    }
}

export default Filter;