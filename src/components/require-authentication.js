import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {

 class Authentication extends Component {

componentWillMount(){
    if(!this.props.authenticated) {
        this.props.router.push('/')
    }
}
componentWillUpdate(nextProps){
    if(!nextProps.authenticated){
        this.props.push('/')
    }
}
        render() {
            return <ComposedComponent { ...this.props } />
        }
    }
    function MapStateToProps(state){
        return {authenticated: state.authenticated }
    }

    return connect(MapStateToProps)(Authentication)
}

ComposedComponent(Authentication).propTypes = {
    router: PropTypes.object
}
