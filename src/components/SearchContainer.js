import React from 'react';
import { connect } from 'react-redux';

// actions
import {input, clearInput, fetchJobs} from '../redux/actions';

class SearchContainer extends React.Component{

    handleChange=(event)=>{
        // this.props.input because in mapDispatchToProps specified 'input:xxx'
        this.props.inputAction(event.target.value)
    }

    handleSubmit = () => {
        this.props.fetchJobs(this.props.input)
        this.props.clearInput()
    }

    enterKeySubmit=(event)=>{
        if (event.which === 13 && !event.shiftKey) {
            this.handleSubmit()
        }
    }

    render (){
        console.log('this.props.input', this.props.input)
        return(
            <div className="search-container">
                <div className="search-container-title">
                    {/* <p>search icon here</p> */}
                    <span>Search for job title or company name</span>
                </div>
                <div className="search-container-query">
                    <input type="text" name="query" value={this.props.input} onChange={this.handleChange} onKeyPress={this.enterKeySubmit}></input>
                </div>
                <div className="search-container-filter-results">
                    {/* <p>filter result button here</p> */}
                </div>
            </div>
        )
    }
}

//mapStateToProps needs to return an object,
//where the key is the new prop name to be used in the React app and the value is the name of the reducer function.
const mapStateToProps = (state) =>{
    return {
        input:state.input // in reducers.js, "input:inputReducer", hence state.input 
    }
}

//dispatch actions
const mapDispatchToProps = (dispatch)=>{
    return {
        inputAction:(event)=>{dispatch(input(event))},
        clearInput:()=>{dispatch(clearInput())},
        fetchJobs:(text)=>{dispatch(fetchJobs(text))}
    }
}

// export default connect(mapStateToProps)(SearchContainer)
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)