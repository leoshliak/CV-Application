import React from "react";

const PersDetailsForm = ({ 
   toggleVisibility, visibleDivs,
   Name, Email,
   Phone,  Adress,
}) => {
   return (
      <form  className={visibleDivs.div1 ? 'personal-details visible' : 'personal-details hidden'}>
         <div className="title-con">
            <h2>Personal Details</h2>{" "}
            <span onClick={() => toggleVisibility("div1", event)}>▲</span>
         </div>
         <div
            className='form-con'
         >
            <div className="input-group">
               <label htmlFor="full-name">
                  <span className="label-text">Full name</span>
               </label>
               <input
                  type="text"
                  id="full-name"
                  placeholder="First and last name"
                  maxLength={44}
                  value={Name[0]}
                  onChange={(e) => {
                     Name[1](e.target.value);
                  }}
               />
            </div>
            <div className="input-group">
               <label htmlFor="email">
                  <span className="label-text">Email</span>
               </label>
               <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  maxLength={44}
                  value={Email[0]}
                  onChange={(e) => {
                     Email[1](e.target.value);
                  }}
               />
            </div>
            <div className="input-group">
               <label htmlFor="phone-number">
                  <span className="label-text">Phone number</span>
               </label>
               <input
                  type="tel"
                  id="phone-number"
                  placeholder="Enter phone number"
                  maxLength={44}
                  value={Phone[0]}
                  onChange={(e) => {
                     Phone[1](e.target.value);
                  }}
               />
            </div>
            <div className="input-group">
               <label htmlFor="address">
                  <span className="label-text">Address</span>
               </label>
               <input
                  type="text"
                  id="address"
                  placeholder="City, Country"
                  maxLength={44}
                  value={Adress[0]}
                  onChange={(e) => {
                     Adress[1](e.target.value);
                  }}
               />
            </div>
         </div>
      </form>
   );
};

export default PersDetailsForm;
