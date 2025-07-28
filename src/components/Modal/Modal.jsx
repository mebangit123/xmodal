import React, { useRef, useState } from 'react'
import Modal from 'react-modal'
// ReactModal.setAppElement('#root');

function ModalWrapper({isOpen, setIsOpen,children}) {
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
  const handleClose = () => {
    setIsOpen(false)
  }

  const customStyles = {
      content: {
          // position: 
          width : '95%',
          maxWidth: '572px',
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          height: 'fit-content',
          maxHeight: '90vh',
          background : 'rgba(239, 239, 239, 0.85)',
          border: '0',
          borderRadius : '15px',
          padding:'2rem',
      },
      overlay: {
        background: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute'
      },
    }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    > 
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
            <input type='date' name='dob' id='dob' value={dob} onChange={(e) => setDob(e.target.value)} required/>
          </div>
          <div className='formControl'>
            <button type='submit' className='submit-button'>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </Modal>
  )
}

export default ModalWrapper
