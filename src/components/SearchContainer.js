import React from 'react';
import { connect } from 'react-redux';

// actions
import { input, fetchJobs } from '../redux/actions';

class SearchContainer extends React.Component {

    handleChange = (event) => {
        // this.props.input because in mapDispatchToProps specified 'input:xxx'
        this.props.inputAction(event.target.value)
    }

    handleSubmit = () => {
        this.props.fetchJobs(this.props.input)
    }

    enterKeySubmit = (event) => {
        if (event.which === 13 && !event.shiftKey) {
            this.handleSubmit()
        }
    }

    handleClick = (event) => {
        console.log('clicked on filter results button - no functionality added yet :) ')
    }

    render() {
        return (
            <div className="search-container" style={{ background: "#f9f9f9", padding: '10px 20px' }}>
                <div className="search-container-title">
                    <img className="icons" alt="search-icon" src="https://assets.bossjob.com/website/Search.svg" />
                    <span className="search-container-text">Search for job title or company name</span>
                </div>
                <div className="search-container-query" style={{ paddingBottom: "2em" }}>
                    <input
                        type="text"
                        name="query"
                        value={this.props.input}
                        onChange={this.handleChange}
                        onKeyPress={this.enterKeySubmit}
                        style={{
                            width: "100%",
                            lineHeight: "30px",
                            outline: "none",
                            border: "none",
                            borderBottom: "1px solid lightgrey",
                            backgroundColor: "#f9f9f9",
                            color: "#136FD3",
                            textAlign: "center"
                        }}>
                    </input>
                </div>
                <div className="search-container-filter-results" style={{ paddingBottom: "2em" }}>
                    <button
                        onClick={this.handleClick}
                        style={{
                            width: "100%",
                            height: "2.5em",
                            backgroundColor: "#f9f9f9",
                            border: "1px solid #136FD3",
                            borderRadius: "30px",
                            outline: "none"
                        }}>
                        <p style={{ color: "#136FD3", margin: 0, fontWeight: "800" }}>Filter results</p>
                    </button>
                </div>
            </div >
        )
    }
}

//mapStateToProps needs to return an object,
//where the key is the new prop name to be used in the React app and the value is the name of the reducer function.
const mapStateToProps = (state) => {
    return {
        input: state.input // in reducers.js, "input:inputReducer", hence state.input
    }
}

//dispatch actions
const mapDispatchToProps = (dispatch) => {
    return {
        inputAction: (event) => { dispatch(input(event)) },
        fetchJobs: (text) => { dispatch(fetchJobs(text)) }
    }
}

// export default connect(mapStateToProps)(SearchContainer)
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)