// Action Creator

export function getRestaurants (restaurants) {
    return {
        type: 'GET_RESTAURANTS',
        payload: restaurants,
    };
}

//action for User Sign In.

export function authenticate(isLoggedIn) {
    return {
        type: 'CHANGE_AUTH',
        payload: isLoggedIn
    }
}
