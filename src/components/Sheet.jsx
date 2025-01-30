import React from "react";

const Sheet = ({name ,email, phone, adress, visibleDivs, edarr, exparr,}) => {
    return (
        <div className="paper-sheet">
      <div className="personal-info">
         <h3>{name}</h3>
         <div className="personal-data">
            <p>{email}</p>
            <p>{phone}</p>
            <p>{adress}</p>
         </div>
      </div>
      <div className="rest">
        <div className="education-data">
            <h4 style={{ display: edarr.length > 0 || visibleDivs.edForm  ? 'block' : 'none' }}>Education</h4>
            <div className="educations-container">
            {edarr.map((educ, index) => (
            <div className="ed-piece" key={index}>
              <div>
              <p className="ed-title">{educ.EI}</p>
              <p className='degree'>{educ.degree}</p>
              </div>
              <div>
              <p>{educ.startDate} – {educ.endDate}</p>
              <p>{educ.location}</p>
              </div>
            </div>
))}</div>
        </div>
          <div className="experience-data">
          <h4 style={{ display: exparr.length > 0 || visibleDivs.expForm  ? 'block' : 'none' }}>Professional Experience</h4>
          <div className="experience-container">
            {exparr.map((exp, index) => (
              <div className="exp-piece" key={index}>
                <div className='no-des-data'>
                   <div>
                <p className='exp-title'>{exp.compName}</p>
                <p>{exp.position}</p>
                  </div>
                  <div>
                <p>{exp.startDate} – {exp.endDate}</p>
                <p>{exp.location}</p>
                </div>
                </div>
                <p className='des'>{exp.description}</p>
              </div>
            ))}
          </div>
          </div>
      </div>
     </div>
    )
}

export default Sheet
