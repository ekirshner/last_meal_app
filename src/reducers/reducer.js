export  function reducer(state,  action) {

    if (action.type === 'GET_RESTAURANTS') {
        console.log('heyy')
        return {
            restaurantList: action.payload,
        };
    }
    return state;
}



//Export and set initial state
