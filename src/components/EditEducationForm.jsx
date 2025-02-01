import React from "react";

const EditEducationForm = ({ formData, handleInputChange, handleConfirm, toggleVisibility, visibleDivs, cancel, editIndex}) => {
  return (
    <form className={visibleDivs.editForm ? 'edit-form visible' : 'edit-form hidden'} onSubmit={(e) =>{
        
        handleConfirm(editIndex, e)
        toggleVisibility('editForm', event);
        toggleVisibility('edButton', event);
        }}>
        <div className="input-group">
           <label htmlFor="shool"><span className="label-text">School</span></label>
           <input type="text" id='school' name='EI' value={formData.EI} onChange={handleInputChange} maxLength={44} placeholder='Enter school / university' />
        </div>

        <div className="input-group">
           <label htmlFor="degree"><span className="label-text">Degree</span></label>
           <input type="text" id='degree' name='degree' value={formData.degree} onChange={handleInputChange} maxLength={44} placeholder='Enter degree / field of study' />
        </div>

        <div className="ed-dates">
        <div className="input-group">
           <label htmlFor="start"><span className="label-text">Start Date</span></label>
           <input type="date" id='start' name='startDate' value={formData.startDate} onChange={handleInputChange} maxLength={44} placeholder='' />
        </div>

        <div className="input-group">
           <label htmlFor="end"><span className="label-text">End Date</span></label>
           <input type="date" id='end' name='endDate' value={formData.endDate} onChange={handleInputChange} maxLength={44} placeholder='' />
        </div>
        </div>

        <div className="input-group">
           <label htmlFor="EI-location"><span className="label-text">Location</span></label>
           <input type="text" id='EI-location' name='location' value={formData.location} onChange={handleInputChange} maxLength={44} placeholder='City, Country' />
        </div>

        <div className="ed-buttons">
          
          <button className='cancel' type='' onClick={(e) => {cancel(e, 'editForm', 'edButton', 'education')}}>Cancel</button>
            <button  className='confirm'>Confirm</button>
        </div>
      </form>
  )
}

export default EditEducationForm
