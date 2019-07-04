import React from 'react';

// destructuring object in the parameter
const JobCard = (
    // data
    {
    data:{
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
        xp_lvl,
    }
}
) =>{
    // console.log('data in jobcard', data)
    console.log('data in jobcard', {data:{
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
        xp_lvl,
    }
})
    return(
        <div className="job-card" key={id}>
            <div className="job-title">{job_title}</div>
            <div className="job-type">{job_type}</div>
            <div className="job-salary-range"></div>
            <div className="job-country">{job_country}</div>
            <div className="job-location">{job_location}</div>
            <div className="job-degree">{degree}</div>
            <div className="job-company-name">{company_name}</div>
            <div className="job-company-location">{company_location}</div>
            <div className="job-xp-lvl">{xp_lvl}</div>
        </div>
    )
}

export default JobCard
