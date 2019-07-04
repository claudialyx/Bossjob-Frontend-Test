import {combineReducers} from 'redux';
import {INPUT, CLEAR_INPUT, FETCH_JOBS} from './types';

// reminder: to check if should be [] or {} 
const defaultState = [];

// anything to do with input 
const inputReducer = (state = "", action) =>{
    switch(action.type){
        case INPUT:
            return action.value
        case CLEAR_INPUT:
            return "";
        default:
            return state;
    }
}

// anything to do with jobs 
// for now naming the reducer as fetchJobsReducer because currently only have fetchjob function that I can think of...
const fetchJobsReducer = (state = defaultState, action) =>{
    switch(action.type){
        case FETCH_JOBS:
            console.log('action.data', action.data)
            return 
        default:
            return state
    }
}

const rootReducer = combineReducers({
    input: inputReducer,
    fetchJobs: fetchJobsReducer,
})

export default rootReducer;
