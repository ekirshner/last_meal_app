import { createStore } from 'redux';

// Create reducer function
function reducer (state,  action) {

    if (action.type === 'GET_RESTAURANTS') {
        console.log(action.payload)
        return {
            restaurantList: action.payload,
        };
    }

    if (action.type === 'CHANGE_AUTH' ) {
        return {
            authenticated: action.payload,
        }
    }
    if(action.type === 'ADD_RESTAURANT') {
        return {
            restaurant: state.restaurant.concat([action.payload]),
        }
    }
    return state;
}



//Export and set initial state
export const store = createStore (reducer, {
    restaurantList: [],
    authenticated: false,
});
