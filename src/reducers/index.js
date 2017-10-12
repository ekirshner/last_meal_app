import { combineReducers } from 'redux';
import { reducer as form  } from 'redux-form';
import authReducer from './auth-reducer';
import { reducer } from './reducer';

const rootReducer = combineReducers({
    restaurantList: [],
    form: form,
    auth: authReducer,
});


export default rootReducer;
