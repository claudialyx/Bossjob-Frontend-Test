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
            // job_country,
            job_type,
            job_location,
            salary_range_from,
            salary_range_to,
            company_name,
            // company_location,
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
        const minSalary = parseInt(salary_range_from, 10) / 1000
        const maxSalary = parseInt(salary_range_to, 10) / 1000
        const currency = "₱";
        return currency + minSalary + "k - " + currency + maxSalary + "k";
    }

    const textWithIcon = { paddingLeft: "0.5em" }

    return (
        <div className="job-card" key={id}>
            <div className="job-card-header">
                <div className="job-title">{job_title}</div>
                <div className="job-salary-range">{salaryRange()}</div>
            </div>
            <div className="job-card-job-details">
                <div className="job-type">
                    <img className="icons" alt="clock-icon" src="https://assets.bossjob.com/website/clock.svg" />
                    <span style={textWithIcon}>{job_type}</span>
                </div>
                <div className="job-location">
                    <img className="icons" alt="location-icon" src="https://assets.bossjob.com/website/pin.svg" />
                    <span style={textWithIcon}>{job_location}</span>
                </div>
                <div className="job-degree">
                    <img className="icons" alt="graduation-hat-icon" src="https://assets.bossjob.com/website/education.svg" />
                    <span style={textWithIcon}>{degree}</span>
                </div>
                <div className="job-xp-lvl">
                    <img className="icons" alt="bag-icon" src="https://assets.bossjob.com/website/briefcase.svg" />
                    <span style={textWithIcon}>{xp_lvl}</span>
                </div>
            </div>
            <div className="job-card-company-details">
                <img className="job-company-logo" alt="company-logo" src={company_logo} width="50" height="50" />
                <div className="job-company-name">{company_name}</div>
            </div>
            <div className="job-created-at">
                <span style={{ fontSize: "13px", color: "grey" }}>{timeFromNow()}</span>
            </div>
        </div>
    )
}

export default JobCard
