import React, { useRef, useState } from 'react'
import './UserForm.css'

function UserForm({setIsOpen}) {
  const [username , setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const emailRef = useRef(null);


  function validateDob(dob) {
    const currentDate = new Date();
    const birthDate = new Date(dob);
    if(birthDate > currentDate) {
      return false;
    }
    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailCheck = emailRef.current.value;
    if(!emailCheck.includes('@')) {
      console.log('validate email')
      emailRef.current.setCustomValidity(`Please include an '@' in the email address. ${email} is missing and '@.`)
      emailRef.current.reportValidity();
      return;
    }
    if(phone.length != 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return; 
    }
    if(!validateDob(dob)) {
      alert('Invalid date of birth. Date of birth cannot be in the future.')
      return;
    }
    setIsOpen(false);
  }
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h3>Fill Details</h3>
        <form className='formContent' onSubmit={handleSubmit}>
          <div className='formControl'>
            <label>Username:</label>
            <input type='text' name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} on required/>
          </div>
          <div className='formControl'>
            <label>Email Address:</label>
            <input type='text' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} required/>
          </div>
          <div className='formControl'>
            <label>Phone Number:</label>
            <input type='number' name='phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
          </div>
          <div className='formControl'>
            <label>Date of Birth:</label>
            <input type='date' name='dob' value={dob} onChange={(e) => setDob(e.target.value)} required/>
          </div>
          <div className='formControl'>
            <button type='submit' className='submit-button'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm
