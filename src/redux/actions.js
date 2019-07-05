import { INPUT, FETCH_JOBS, } from '../redux/types'


export const input = (value) => {
    return {
        type: INPUT,
        value
    }
}


// unlike previous action creators that returned an action object that was immediately sent to the reducers,
// an asychronous action is not an object but a function that is immediately invoked.
// normally when action creators returns an object, that object gets passted to reducer.
// however, when action creators returns a function (when fetching API), the redux-thunk middleware will immediately
// invoke that function instead of passing it to the reducer. And this function does not return the action object.
// thus, we have to manually dispatch them = > hence using dispatch({type:xxx}) 
// the upside of manually dispatching is that we can dispatch as many actions as we want even tho it's in 1 action creator.


// to fetch full job list from API (without querying)
export const fetchJobs = (searchQuery) => dispatch => {
    // hardcoded the number of jobs to be retrieved to be 12 
    fetch(`https://search.bossjob.com/api/v1/search/job_filter?size=12&query=${searchQuery ? searchQuery : "system"}`)
        .then(response => response.json())
        .then(data => dispatch({
            type: FETCH_JOBS,
            data
        }))
        .catch(error => {
            console.log("error fetching job list:", error)
        });
}
