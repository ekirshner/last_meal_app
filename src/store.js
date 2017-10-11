import { createStore } from 'redux';

// Create reducer function
function reducer (state,  action) {
    
    // if (action.type === 'GET_LOTS') {
    //     return {
    //         parkingLots: action.payload,
    //     }; 
    // }
    return state;
}



//Export and set initial state
export const store = createStore (reducer, {
    //initial state
});