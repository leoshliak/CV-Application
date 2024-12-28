import { useState } from 'react'
import './App.css'
import Side from './components/Side'


function App() {
  const [name, setName] = useState('James Milner')
  const [email, setEmail] = useState('example@gmail.com') 
  const [phone, setPhone] = useState('+38 094 343 1122')
  const [adress, setAdress] = useState('UK, Liverpool')
  
  return (
    <>
    <Side />
    </>
  )
}

export default App
