import { combineReducers } from 'redux';
import activitiesReducer from './activitiesReducer';
import countriesReducer from './countriesReducer';
import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({countriesReducer, activitiesReducer, paginationReducer});

export default rootReducer;
