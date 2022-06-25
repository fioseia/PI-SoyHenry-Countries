import { combineReducers } from 'redux';
import activitiesReducer from './activitiesReducer';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({countriesReducer, activitiesReducer});

export default rootReducer;
