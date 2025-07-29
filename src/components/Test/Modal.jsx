import { useEffect, useRef, useState } from "react";
import './Modal.css';
const Modal = ({ isOpen, onClose, title, children, footer }) => {
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
        //  setIsOpen(false);
       }
      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);
      
      const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
      return (
        isOpen && (
        <div 
          className={`modal-container ${isOpen ? 'show' : 'none'}`}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal">
            <div className="modal-header">
              <h2 id="modal-title" className="modal-title">{title}</h2>
              <button 
                className="modal-close" 
                onClick={onClose}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <div className="modal-content">
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
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
        )
      );
    };

    export default Modal;