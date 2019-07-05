import { combineReducers } from 'redux';
import { INPUT, FETCH_JOBS, } from './types';

// note: can't map {}
// const defaultState = {};
const defaultState = {
    message: "",
    jobData: [],
    totalResults: "",
    totalPages: "",
};

// anything to do with input 
const inputReducer = (state = "", action) => {
    switch (action.type) {
        case INPUT:
            return action.value
        default:
            return state;
    }
}

// anything to do with jobs 
const fetchJobsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_JOBS:
            const payload = action.data
            // console.log('payload', payload)
            // console.log("return", {...defaultState, message:payload.message,jobData:payload.data.jobs,totalResults:payload.data.total_num, totalPages:payload.data.total_pages })
            return { ...defaultState, message: payload.message, jobData: payload.data.jobs, totalResults: payload.data.total_num, totalPages: payload.data.total_pages }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    input: inputReducer,
    jobs: fetchJobsReducer,
})

export default rootReducer;
