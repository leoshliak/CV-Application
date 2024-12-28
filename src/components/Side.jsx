import { useState } from 'react'

export default function Side() {
  const [name, setName] = useState('James Milner')
  const [email, setEmail] = useState('example@gmail.com') 
  const [phone, setPhone] = useState('+38 094 343 1122')
  const [adress, setAdress] = useState('UK, Liverpool')

  
   return (
    <>
    <aside>
      <div className='logo'>
      <h1>CV Builder</h1>
      </div>
      <div className='side-buttons'>
      <button className='clear'>Clear Resume</button>
      <button className='example'>Load Example</button>
      </div>
      <form className="personal-details">
        <h2>Personal Details</h2>
        <div className="input-group">
          <label htmlFor="full-name"><span className="label-text">Full name</span></label>
          <input type="text" id="full-name" placeholder="First and last name" maxLength={52} value={name} onChange={(e) => {setName(e.target.value)}} />
          </div>
          <div className="input-group">
            <label htmlFor="email"><span className="label-text">Email</span></label>
            <input type="email" id="email" placeholder="Enter email" maxLength={52} value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div className="input-group">
              <label htmlFor="phone-number"><span className="label-text">Phone number</span></label>
              <input type="tel" id="phone-number" placeholder="Enter phone number" maxLength={52} value={phone} onChange={(e) => {setPhone(e.target.value)}} />
              </div>
              <div className="input-group">
                <label htmlFor="address"><span className="label-text">Address</span></label>
                <input type="text" id="address" placeholder="City, Country" maxLength={52} value={adress} onChange={(e) => {setAdress(e.target.value)}} />
                </div>
      </form>
      </aside>
    </>
   )
  
}

