import { useState } from 'react'
import './App.css'
import Side from './components/Side'
import Sheet from './components/Sheet'


function App() {

  const [name, setName] = useState('James Milner')
  const [email, setEmail] = useState('example@gmail.com') 
  const [phone, setPhone] = useState('+38 094 343 1122')
  const [adress, setAdress] = useState('UK, Liverpool')

  function clearAll() {
    setName('')
    setEmail('')
    setPhone('')
    setAdress('')
  }

  function loadExample() {
    setName('James Milner')
    setEmail('example@gmail.com')
    setPhone('+38 094 343 1122')
    setAdress('UK, Liverpool')
  }
  
  const [visibleDivs, setVisibleDivs] = useState({
    div1: true,
    div2: true,
    div3: true,
  });

  const toggleVisibility = (divKey, event) => {
    event.target.classList.toggle('turn');
    setVisibleDivs((prev) => ({
      ...prev,
      [divKey]: !prev[divKey],
    }));
  };
  
  
  return (
    <>
    <aside>
      <div className='logo'>
      <h1>CV Builder</h1>
      </div>
      <div className='side-buttons'>
      <button className='clear' onClick={clearAll}>Clear Resume</button>
      <button className='example' onClick={loadExample}>Load Example</button>
      </div>
      <form className="personal-details">
       <div className='title-con'><h2>Personal Details</h2>  <span onClick={() => toggleVisibility('div1', event)}>▲</span></div>
          <div style={{ display: visibleDivs.div1 ? 'block' : 'none' }} className="form-con">
        <div className="input-group">
          <label htmlFor="full-name"><span className="label-text">Full name</span></label>
          <input type="text" id="full-name" placeholder="First and last name" maxLength={44} value={name} onChange={(e) => {setName(e.target.value)}} />
          </div>
          <div className="input-group">
            <label htmlFor="email"><span className="label-text">Email</span></label>
            <input type="email" id="email" placeholder="Enter email" maxLength={44} value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div className="input-group">
              <label htmlFor="phone-number"><span className="label-text">Phone number</span></label>
              <input type="tel" id="phone-number" placeholder="Enter phone number" maxLength={44} value={phone} onChange={(e) => {setPhone(e.target.value)}} />
              </div>
              <div className="input-group">
                <label htmlFor="address"><span className="label-text">Address</span></label>
                <input type="text" id="address" placeholder="City, Country" maxLength={44} value={adress} onChange={(e) => {setAdress(e.target.value)}} />
                </div>
                </div>
      </form>
 
      
      </aside>
    <div className='cv'>
    <div className="paper-sheet">
      <div className="personal-info">
         <h3>{name}</h3>
         <div className="personal-data">
            <p>{email}</p>
            <p>{phone}</p>
            <p>{adress}</p>
         </div>
      </div>
      <div className="rest"></div>
     </div>
    </div>
    </>
  )
}

export default App
