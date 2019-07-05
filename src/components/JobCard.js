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
    const timeFromNow = () => {
        return moment(created_at, "YYYY-MM-DD HH:mm:ss").fromNow()
    }

    const salaryRange = () => {
        const minSalary = parseInt(salary_range_from, 10) * 1 / 1000
        const maxSalary = parseInt(salary_range_to, 10) * 1 / 1000
        const currency = "₱";
        return currency + minSalary + "k - " + currency + maxSalary + "k";
    }

    return (
        <div className="job-card" key={id}>
            <div className="job-card-header">
                <div className="job-title">{job_title}</div>
                <div className="job-salary-range">{salaryRange()}</div>
            </div>
            <div className="job-card-job-details">
                <div className="job-type">
                    <img src="https://assets.bossjob.com/website/clock.svg" width="15" height="15" />
                    {job_type}
                </div>
                {/* <div className="job-country">{job_country}</div> */}
                {/* <div className="job-location">{job_location},{job_country}</div> */}
                <div className="job-location">
                    <img src="https://assets.bossjob.com/website/pin.svg" width="15" height="15" />
                    {job_location}
                </div>
                <div className="job-degree">
                    <img src="https://assets.bossjob.com/website/education.svg" width="15" height="15" />
                    {degree}
                </div>
                <div className="job-xp-lvl">
                    <img src="https://assets.bossjob.com/website/briefcase.svg" width="15" height="15" />
                    {xp_lvl}
                </div>
            </div>
            <div className="job-card-company-details">
                <div className="job-company-logo">
                    <img src={company_logo} width="50" height="50" />
                </div>
                <div className="job-company-name">{company_name}</div>
                {/* <div className="job-company-location">{company_location}</div> */}
            </div>
            <div className="job-created-at">{timeFromNow()}</div>
        </div>
    )
}

export default JobCard
