import { createStore } from 'redux';

// Create reducer function
function reducer (state,  action) {
    console.log(action)

    if (action.type === 'GET_RESTAURANTS') {
        console.log(action.payload)
        return {
            restaurantList: action.payload,
            order: state.order,
            authenticated: state.authenticated,
        };
    }

    if (action.type === 'CHANGE_AUTH' ) {
        return {
            authenticated: action.payload,
            order: state.order,
            restaurantList: state.restaurantList,
        }
    }

    if(action.type === 'ADD_RESTAURANT') {
        return {
            restaurant: state.restaurant.concat([action.payload]),
            order: state.order,
            restaurantList: state.restaurantList,
            authenticated: state.authenticated,
        }
    }

    if(action.type === 'BUY_FOOD') {
        return {
            order: action.payload,
            restaurantList: state.restaurantList,
            authenticated: state.authenticated,
        }
    }

    return state;
}



// Export and set initial state
export const store = createStore (reducer, {
    restaurantList: [],
    authenticated: false,
    order: null,
});
