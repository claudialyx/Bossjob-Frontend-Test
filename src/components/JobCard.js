import React from 'react';
import moment from 'moment';

// destructuring object in the parameter
const JobCard = (
    // data
    {
        data: {
            id,
            degree,
            job_title,
            job_country,
            job_type,
            job_location,
            salary_range_from,
            salary_range_to,
            company_name,
            company_location,
            company_logo,
            xp_lvl,
            created_at,
        }
    }
) => {
    // console.log('data in jobcard', data)
    const timeFromNow = (created_at) => {
        return moment(created_at, "YYYY-MM-DD HH:mm:ss").fromNow()
    }
    return (
        <div className="job-card" key={id}>
            <div className="job-card-header">
                <div className="job-title">{job_title}</div>
                <div className="job-salary-range">{salary_range_from}</div>
            </div>
            <div className="job-card-job-details">
                <div className="job-type">{job_type}</div>
                {/* <div className="job-country">{job_country}</div> */}
                {/* <div className="job-location">{job_location},{job_country}</div> */}
                <div className="job-location">{job_location}</div>
                <div className="job-degree">{degree}</div>
                <div className="job-xp-lvl">{xp_lvl}</div>
            </div>
            <div className="job-card-company-details">
                <div className="job-company-logo">
                    <img src={company_logo} width="50" height="50" />
                </div>
                <div className="job-company-name">{company_name}</div>
                {/* <div className="job-company-location">{company_location}</div> */}
            </div>
            <div className="job-created-at">{timeFromNow(created_at)}</div>
        </div>
    )
}

export default JobCard
