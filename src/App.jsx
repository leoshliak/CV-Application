import { useState } from 'react'
import './App.css'
import EditExperienceForm from './components/EditExperienceForm'
import ExperienceForm from './components/ExperienceForm'
import EducationForm from './components/EducationForm'
import EditEducationForm from './components/EditEducationForm'

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
    setExparr([])
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
    setExparr([{
      compName: 'TechNova Solutions',
      position: 'Software Engineer',
      startDate: '01/02/2022',
      endDate: 'present',
      location: 'London, UK',
      description: 'As a Software Engineer at TechNova Solutions, the individual will be responsible for designing, developing, and maintaining software applications that cater to a variety of industries, from finance to healthcare. They will work collaboratively with cross-functional teams to understand user needs and translate them into high-quality software solutions. The role involves writing clean, efficient code, debugging, and performing unit testing to ensure functionality. Additionally, the engineer will be involved in the integration of third-party APIs, ensuring the scalability and security of the applications. With a strong foundation in Computer Science, the individual will also contribute to the continuous improvement of the software development lifecycle and mentor junior team members.',
    }])
  }
  
  const [visibleDivs, setVisibleDivs] = useState({
    div1: true,
    div2: false,
    div3: false,
    edForm: false,
    edButton: true,
    editForm: false,
    expForm: false,
    expButton: true,
    expEditForm: false,
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

  const [exparr, setExparr] = useState([{
    compName: 'TechNova Solutions',
    position: 'Software Engineer',
    startDate: '01/02/2022',
    endDate: 'present',
    location: 'London, UK',
    description: 'As a Software Engineer at TechNova Solutions, the individual will be responsible for designing, developing, and maintaining software applications that cater to a variety of industries, from finance to healthcare. They will work collaboratively with cross-functional teams to understand user needs and translate them into high-quality software solutions. The role involves writing clean, efficient code, debugging, and performing unit testing to ensure functionality. Additionally, the engineer will be involved in the integration of third-party APIs, ensuring the scalability and security of the applications. With a strong foundation in Computer Science, the individual will also contribute to the continuous improvement of the software development lifecycle and mentor junior team members.',
  }]);
  
   const [editIndex, setEditIndex] = useState(null);
   const [editIndex2, setEditIndex2] = useState(null);
  
    const [formData, setFormData] = useState({
      EI: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });

    const [formData2, setFormData2] = useState({
      compName: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });

    function handleInputChange(e) {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    function handleInputChange2(e) {
      const { name, value } = e.target;
      setFormData2((prev) => ({
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

    function handleSubmit2(e) {
      e.preventDefault(); 
   if(formData2.startDate == '') {
    
   } else {
    const [year, month, day] = formData2.startDate.split('-');
      formData2.startDate = `${day}/${month}/${year}`;
   }
      
    
    if(formData2.endDate == '') {
       formData2.endDate = 'present';
    } else {
      const [year2, month2, day2] = formData2.endDate.split('-');
      formData2.endDate = `${day2}/${month2}/${year2}`
    }
    
    

      if (formData2.compName && formData2.position && formData2.startDate) {
        setExparr((prevEd) => [...prevEd, formData2]);
        setFormData2({ compName: '', position: '', startDate: '', endDate: '', location: '', description: '' });
      } else {
        alert('Please fill out all fields.');
      }
    }

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

   function handleConfirm2(index, e) {
    e.preventDefault();

    if(formData2.startDate == '') {
    
    } else {
     const [year, month, day] = formData2.startDate.split('-');
       formData2.startDate = `${day}/${month}/${year}`;
    }
    
    if(formData2.endDate == '') {
       formData2.endDate = 'present';
    } else {
      const [year2, month2, day2] = formData2.endDate.split('-');
      formData2.endDate = `${day2}/${month2}/${year2}`
    }

    if (formData2.compName && formData2.position && formData2.startDate) { 
      exparr[Number(index)] = formData2;
      setExparr([...exparr]);
      setFormData2({ compName: '', position: '', startDate: '', endDate: '', location: '', description});
    } else {
      alert('Please fill out all fields.');
    }

   }

  function handleDelete(index, targetSet) {
    targetSet((prevEd) => prevEd.filter((_, i) => i !== index));
  };

  function cancel(e, form, button, formType) {
    e.preventDefault();
    toggleVisibility(form, event);
    toggleVisibility(button, event);
    
    if(formType === 'education') {
      setFormData({ EI: '', degree: '', startDate: '', endDate: '', location: ''});
    } else {
      setFormData2({ compName: '', position: '', startDate: '', endDate: '', location: '', description});
    }
  }
   
  
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
            <div className='card' key={index}>
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

                   setEditIndex(e.target.id)
                }}></i>
                <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index, setEdarr)}></i>
              </div>
            </div>
          ))}
      </div>
     

      <EducationForm 
       formData={formData}
       handleInputChange={handleInputChange}
       handleSubmit={handleSubmit}
       toggleVisibility={toggleVisibility}
       visibleDivs={visibleDivs}
       cancel={cancel}
      />
 
      <EditEducationForm 
       formData={formData}
       handleInputChange={handleInputChange}
       handleConfirm={handleConfirm}
       toggleVisibility={toggleVisibility}
       visibleDivs={visibleDivs}
       cancel={cancel}
       editIndex={editIndex}
      />

      <button className='add' style={{ display: visibleDivs.edButton ? 'block' : 'none' }} onClick={() => {
        toggleVisibility('edForm', event);
        toggleVisibility('edButton', event);
        }}>Education +</button>
      </div>
      </section>

      <section className='experience'>
      <div className='title-exp'><h2>Experience</h2>  <span className='turn' onClick={() => toggleVisibility('div3', event)}>▲</span></div>
      <div style={{ display: visibleDivs.div3 ? 'flex' : 'none' }} className="education-con">
      <div className="experiences" style={{display: visibleDivs.expButton ? 'flex' : 'none'}}>
      {exparr.map((label, index) => (
         <div className="card" key={index}>
          <p>{label.compName}</p>
          <div className="label-buttons">
                <i className="fa-solid fa-pen-to-square" id={index} onClick={(e) => {
                   toggleVisibility('expEditForm', event);
                   toggleVisibility('expButton', event);

                   const [day, month, year] = exparr[e.target.id].startDate.split('/');

                   let editEndDate;
                    
                   if(exparr[e.target.id].endDate === 'present') {
                     editEndDate = '';
                   } else {
                    const [day2, month2, year2] = exparr[e.target.id].endDate.split('/');
                     editEndDate = `${year2}-${month2}-${day2}`;
                   }

                   setFormData2({
                    compName: exparr[e.target.id].compName,
                    position: exparr[e.target.id].position,
                    startDate: `${year}-${month}-${day}`,
                    endDate: editEndDate,
                    location: exparr[e.target.id].location,
                    description: exparr[e.target.id].description
                   })

                   setEditIndex2(e.target.id)
                }}></i>
                <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index, setExparr)}></i>
              </div>
         </div>
        ))}
      </div>

       <ExperienceForm
          formData2={formData2}
          handleInputChange2={handleInputChange2}
          handleSubmit2={handleSubmit2}
          toggleVisibility={toggleVisibility}
          visibleDivs={visibleDivs}
          cancel={cancel}
        />

      <EditExperienceForm
          formData2={formData2}
          handleInputChange2={handleInputChange2}
          handleConfirm2={handleConfirm2}
          toggleVisibility={toggleVisibility}
          visibleDivs={visibleDivs}
          editIndex2={editIndex2}
          cancel={cancel}
        />

      <button className='add' style={{ display: visibleDivs.expButton ? 'block' : 'none' }} onClick={() => {
        toggleVisibility('expForm', event);
        toggleVisibility('expButton', event);
        }}>Experience +</button>
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
    </div>
    </>
  )
}

export default App
