// Action Creators


// action for fetching restaurant data
export function getRestaurants (restaurants) {
    return {
        type: 'GET_RESTAURANTS',
        payload: restaurants,
    };
}

// action for User Sign In.

export function authenticate(isLoggedIn) {
    return {
        type: 'CHANGE_AUTH',
        payload: isLoggedIn
    }
}

// action for restaurant markers!
export function addRestaurant(restaurant){
    return {
        type: 'ADD_RESTAURANT',
        payload: restaurant,

    }
}

// action for buying food
export function buyFood(purchasedFood) {
    return {
        type: 'BUY_FOOD',
        payload: purchasedFood,
    }
}