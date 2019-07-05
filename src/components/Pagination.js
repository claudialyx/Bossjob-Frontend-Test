import React from 'react';
import { connect } from 'react-redux';

// ran out of time to code for pagination functionalities 
// for now it's just for aesthetics purposes :) 

// TODOS for pagination:
// 1) disabling "<" when user is in page 1 
// 2) logics to display +- 2 pages from the current page number
// 3) specifying the page to be retrieved from api


class Pagination extends React.Component {

    renderPaging = (page, i) => {
        return (
            <a href="#" key={i} style={{ textDecoration: "none", fontWeight: "bold" }}>{page}</a>
        )
    }

    getPaging = () => {
        let pager = [];
        let totalPages = this.props.jobs.totalPages

        // don't display pager if there is only 1 page
        if (totalPages <= 1) {
            return null;
        }

        // if there is more than 1 page but less than 8, show all pages
        if (totalPages > 1 && totalPages < 8) {
            for (let i = 1; i < 8; i++) {
                pager = [...pager, `${i}`]
            }
            return pager.map(this.renderPaging)
        }
        // if there are more than 7 pages, display < 1 2 3 4 5 ... lastPage >
        for (let i = 1; i < 6; i++) {
            pager = [...pager, `${i}`]
        }
        return pager.map(this.renderPaging)
    }

    render() {
        const totalPages = this.props.jobs.totalPages
        const linkStyle = { textDecoration: "none", fontWeight: "bold" }
        return (
            <div className="pagination" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                {totalPages <= 1 ? null : <a href="#" key="back" style={linkStyle}>&lt;</a>}
                {this.getPaging()}
                {totalPages > 7 ? <a href="#" key="etc" style={linkStyle}>...</a> : null}
                {totalPages > 7 ? <a href="#" key="lastPage" style={linkStyle}>{totalPages}</a> : null}
                {totalPages >= 2 ? <a href="#" key="forward" style={linkStyle}>&gt;</a> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs // in reducers.js, "jobs:jobsReducer", hence state.jobs 
    }
}


export default connect(mapStateToProps)(Pagination)
