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
    setEdarr([])
  }

  function loadExample() {
    setName('James Milner')
    setEmail('example@gmail.com')
    setPhone('+38 094 343 1122')
    setAdress('UK, Liverpool')
    setEdarr([
      {
        EI: 'University of Liverpool',
        degree: 'Bachelor of Science in Computer Science',
        startDate: '01/09/2017',
        endDate: '01/06/2021',
        location: 'Liverpool, UK',
      }
    ])
  }
  
  const [visibleDivs, setVisibleDivs] = useState({
    div1: true,
    div2: false,
    div3: false,
    edForm: false,
    edButton: true,
    editForm: false,
  });

  const toggleVisibility = (divKey, event) => {
    if(event.target.innerHTML === '▲') {
      event.target.classList.toggle('turn');
    }
    setVisibleDivs((prev) => ({
      ...prev,
      [divKey]: !prev[divKey],
    }));
  };

  const [edarr, setEdarr] = useState([
    {
      EI: 'University of Liverpool',
      degree: 'Bachelor of Science in Computer Science',
      startDate: '01/09/2017',
      endDate: '01/06/2021',
      location: 'Liverpool, UK',
    }
  ]);
  
 // const [isEditing, setIsEditing] = useState(false);
   const [editIndex, setEditIndex] = useState(null);
  
    const [formData, setFormData] = useState({
      EI: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });

    function handleInputChange(e) {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
 
    function handleSubmit(e) {
      e.preventDefault(); 
   if(formData.startDate == '') {
    
   } else {
    const [year, month, day] = formData.startDate.split('-');
      formData.startDate = `${day}/${month}/${year}`;
   }
      
    
    if(formData.endDate == '') {
       formData.endDate = 'present';
    } else {
      const [year2, month2, day2] = formData.endDate.split('-');
      formData.endDate = `${day2}/${month2}/${year2}`
    }
    
    

      if (formData.EI && formData.degree && formData.startDate) {
        setEdarr((prevEd) => [...prevEd, formData]);
        setFormData({ EI: '', degree: '', startDate: '', endDate: '', location: ''});
      } else {
        alert('Please fill out all fields.');
      }
    }

    /*if (isEditing) {
      // Update the existing card in the array
      setEdarr((prevEd) =>
        prevEd.map((education, index) =>
          index === editIndex ? { ...formData } : education)
      );
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add a new card to the array
      setEdarr((prevEd) => [...prevEd, formData]);
    }

    // Clear the form inputs
    setFormData({ title: '', description: '' });
  

  // Handle editing a card
  const handleEdit = (index) => {
    const cardToEdit = cards[index];
    setFormData(cardToEdit);
    setIsEditing(true);
    setEditIndex(index);
  };*/

   function handleConfirm(index, e) {
    e.preventDefault();

    if(formData.startDate == '') {
    
    } else {
     const [year, month, day] = formData.startDate.split('-');
       formData.startDate = `${day}/${month}/${year}`;
    }
    
    if(formData.endDate == '') {
       formData.endDate = 'present';
    } else {
      const [year2, month2, day2] = formData.endDate.split('-');
      formData.endDate = `${day2}/${month2}/${year2}`
    }

    if (formData.EI && formData.degree && formData.startDate) { 
      edarr[Number(index)] = formData;
      setEdarr([...edarr]);
      setFormData({ EI: '', degree: '', startDate: '', endDate: '', location: ''});
    } else {
      alert('Please fill out all fields.');
    }

   }

  // Handle deleting a card
  function handleDelete(index) {
    setEdarr((prevEd) => prevEd.filter((_, i) => i !== index));
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
      <div className="side-content">
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
 
      <section className="education">
      <div className='title-ed'><h2>Education</h2>  <span className='turn' onClick={() => toggleVisibility('div2', event)}>▲</span></div>
      <div style={{ display: visibleDivs.div2 ? 'flex' : 'none' }} className="education-con">
      <div className="degrees" style={{display: visibleDivs.edButton ? 'flex' : 'none'}}>
          {edarr.map((label, index) => (
            <div className='ed-card' key={index}>
              <p>{label.EI}</p>

              <div className="label-buttons">
                <i className="fa-solid fa-pen-to-square" id={index} onClick={(e) => {
                   toggleVisibility('editForm', event);
                   toggleVisibility('edButton', event);

                   const [day, month, year] = edarr[e.target.id].startDate.split('/');

                   let editEndDate;
                    
                   if(edarr[e.target.id].endDate === 'present') {
                     editEndDate = '';
                   } else {
                    const [day2, month2, year2] = edarr[e.target.id].endDate.split('/');
                     editEndDate = `${year2}-${month2}-${day2}`;
                   }

                   setFormData({
                    EI: edarr[e.target.id].EI,
                    degree: edarr[e.target.id].degree,
                    startDate: `${year}-${month}-${day}`,
                    endDate: editEndDate,
                    location: edarr[e.target.id].location,
                   })

                           /*
                   const [year, month, day] = formData.startDate.split('/');
                formData.startDate = `${year}/${month}/${day}`;
    
             if(formData.endDate == 'present') {
            formData.endDate = '';
           } else {
             const [year2, month2, day2] = formData.endDate.split('/');
             formData.endDate = `${year2}/${month2}/${day2}`
           } */

                   setEditIndex(e.target.id)
                }}></i>
                <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
              </div>
            </div>
          ))}
      </div>
      <form className="ed-form" style={{ display: visibleDivs.edForm ? 'block' : 'none' }} onSubmit={(e) =>{
        e.preventDefault()
        handleSubmit(e);
        toggleVisibility('edForm', event);
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
           <label htmlFor="EI-location"><span className="label-text">Lacation</span></label>
           <input type="text" id='EI-location' name='location' value={formData.location} onChange={handleInputChange} maxLength={44} placeholder='City, Country' />
        </div>

        <div className="ed-buttons">
          
          <button className='cansel' type='' onClick={(e) => {
            e.preventDefault();
            toggleVisibility('edForm', event);
            toggleVisibility('edButton', event);
            setFormData({ EI: '', degree: '', startDate: '', endDate: '', location: ''});
            }}>Cansel</button>
            <button  className='save'>Save</button>
        </div>
      </form>

      <form className="edit-form" style={{ display: visibleDivs.editForm ? 'block' : 'none' }} onSubmit={(e) =>{
        
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
           <label htmlFor="EI-location"><span className="label-text">Lacation</span></label>
           <input type="text" id='EI-location' name='location' value={formData.location} onChange={handleInputChange} maxLength={44} placeholder='City, Country' />
        </div>

        <div className="ed-buttons">
          
          <button className='cansel' type='' onClick={(e) => {
            e.preventDefault();
            toggleVisibility('editForm', event);
            toggleVisibility('edButton', event);
            setFormData({ EI: '', degree: '', startDate: '', endDate: '', location: ''});
            }}>Cansel</button>
            <button  className='confirm'>Confirm</button>
        </div>
      </form>

      <button className='add' style={{ display: visibleDivs.edButton ? 'block' : 'none' }} onClick={() => {
        toggleVisibility('edForm', event);
        toggleVisibility('edButton', event);
        }}>Education +</button>
      </div>
      </section>
      </div>
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
      </div>
     </div>
    </div>
    </>
  )
}

export default App
