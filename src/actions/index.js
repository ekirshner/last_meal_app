

export function getRestaurants(restaurants) {
    return {
        type: 'GET_RESTAURANTS',
        payload: restaurants,
    };
}
