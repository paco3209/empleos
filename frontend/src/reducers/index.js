import { combineReducers } from 'redux';
import empleoReducer from './empleoReducer';

//import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    empleos: empleoReducer,

});
