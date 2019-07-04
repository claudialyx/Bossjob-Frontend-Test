import {combineReducers} from 'redux';
import {INPUT, CLEAR_INPUT, FETCH_JOBS, QUERIED_JOBS} from './types';

// note: can't map {}
// const defaultState = {};
const defaultState ={
    message:"",
    jobData:[],
    totalResults:"",
    totalPages:"",
};

// anything to do with input 
const inputReducer = (state = "", action) =>{
    switch(action.type){
        case INPUT:
            console.log('action.value in INPUT', action.value)
            return action.value
        // case CLEAR_INPUT:
        //     console.log('action.value in CLEAR_INPUT', action.value)
        //     return "";
        default:
            return state;
    }
}

// anything to do with jobs 
const fetchJobsReducer = (state = defaultState, action) =>{
    switch(action.type){
        case FETCH_JOBS:
        case QUERIED_JOBS:
            const payload = action.data
            // console.log('action.data', action.data)
            // console.log("asdas", {...defaultState, message:payload.message,jobData:payload.data.jobs,totalResults:payload.data.total_num, totalPages:payload.data.total_pages })
            return {...defaultState, message:payload.message,jobData:payload.data.jobs,totalResults:payload.data.total_num, totalPages:payload.data.total_pages }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    input: inputReducer,
    jobs: fetchJobsReducer,
})

export default rootReducer;
