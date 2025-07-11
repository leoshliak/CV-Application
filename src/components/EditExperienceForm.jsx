import React from "react";

  const EditExperienceForm = ({ formData2, handleInputChange2, handleConfirm2, toggleVisibility, visibleDivs, editIndex2, cancel }) => {


    return (
      <form
      className={visibleDivs.expEditForm ? 'edit-form visible' : 'edit-form hidden'}
        onSubmit={(e) => {
          e.preventDefault()
        handleConfirm2(editIndex2, e); 
        toggleVisibility('expEditForm', event);
        toggleVisibility('expButton', event);
        }}
      >
        <div className="input-group">
          <label htmlFor="company" className="label-text">Company Name</label>
          <input
            type="text"
            id="company"
            name="compName"
            value={formData2.compName}
            onChange={handleInputChange2}
            maxLength={44}
            placeholder="Enter Company Name"
          />
        </div>
  
        <div className="input-group">
          <label htmlFor="position" className="label-text">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData2.position}
            onChange={handleInputChange2}
            maxLength={44}
            placeholder="Enter Position Title"
          />
        </div>
  
        <div className="ed-dates">
          <div className="input-group">
            <label htmlFor="start" className="label-text">Start Date</label>
            <input
              type="date"
              id="start"
              name="startDate"
              value={formData2.startDate2}
              onChange={handleInputChange2}
            />
          </div>
  
          <div className="input-group">
            <label htmlFor="end" className="label-text">End Date</label>
            <input
              type="date"
              id="end"
              name="endDate"
              value={formData2.endDate}
              onChange={handleInputChange2}
            />
          </div>
        </div>
  
        <div className="input-group">
          <label htmlFor="location" className="label-text">
            Location <span className="optional">(optional)</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData2.location}
            onChange={handleInputChange2}
            maxLength={44}
            placeholder="City, Country"
          />
        </div>
  
        <div className="input-group">
          <label htmlFor="description" className="label-text">
            Description <span className="optional">(optional)</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData2.description}
            onChange={handleInputChange2}
            placeholder="Enter Description"
          ></textarea>
        </div>
  
        <div className="ed-buttons">
          <button
            className="cancel"
            type="button"
            onClick={(e) => {
              cancel(e, 'expEditForm', 'expButton', 'experience')
            }}
          >
            Cancel
          </button>
          <button className="confirm" type="submit">
            Confirm
          </button>
        </div>
      </form>
    );
  };

  export default EditExperienceForm;
