import React from 'react';
import { connect } from 'react-redux';

import {fetchJobs} from '../redux/actions'
import JobCard from './JobCard';

class JobListingContainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchJobs()
    }
    
    // displayJobCards = ()=>{
    //     this.props.jobs.map((data, index)=>{
    //         return(             
    //             <JobCard data={data} key={index}/>
    //         )
    //     })  
    // }

    render (){
        console.log('this.props.jobs', this.props.jobs.jobData)
        const displayJobCards = this.props.jobs.jobData.map((data, index)=>{
            return(
                <JobCard data={data} key={index}/>
            )
        })
        return(
            <div className="job-listing-container">
                {displayJobCards}
            </div>
        )
    }
}

//mapStateToProps needs to return an object,
//where the key is the new prop name to be used in the React app and the value is the name of the reducer function.
const mapStateToProps = (state) =>{
    return {
        jobs:state.jobs // in reducers.js, "jobs:jobsReducer", hence state.jobs 
    }
}

//dispatch actions
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchJobs:()=>{dispatch(fetchJobs())}
    }
}

// export default connect(mapStateToProps)(JobListingContainer)
// export default connect(null,mapDispatchToProps)(JobListingContainer)
export default connect(mapStateToProps, mapDispatchToProps)(JobListingContainer)