// import UserForm from "./components/Form/UserForm";
import Home from "./components/Home/Home";
import ModalWrapper from "./components/Modal/Modal";
import UserForm from "./components/Form/UserForm";
import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';
// import Modal from "./components/Test/Modal";
import './components/Test/Modal.css'
// Set the app element for accessibility
// Modal.setAppElement('#root');

const Modal = ({ isOpen, onClose, title, children, footer }) => {
      // Close modal when pressing Escape key
      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
        
        if (isOpen) {
          document.addEventListener('keydown', handleKeyDown);
        }
        
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [isOpen, onClose]);
      
      // Prevent body scroll when modal is open
      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);
      
      // Close modal when clicking outside
      const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
      
      return (
        <div 
          className={`modal-container ${isOpen ? 'show' : ''}`}
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
              {children}
            </div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      );
    };

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
      
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);
      
      const modalFooter = (
        <>
          <button className="btn btn-secondary" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={() => {
            alert('Action confirmed!');
            closeModal();
          }}>
            Confirm
          </button>
        </>
      );
      
      return (
        <div className="app">
          <h1>React Modal Demo</h1>
          <p>Click below to open the modal dialog</p>
          
          <button className="trigger-btn" onClick={openModal}>
            Open Modal
          </button>
          
          <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Sample Modal Dialog"
            footer={modalFooter}
          >
            <p>This is a fully accessible modal dialog created with plain JSX.</p>
            <p>It includes:</p>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Keyboard navigation (Escape to close)</li>
              <li>Click outside to close</li>
              <li>Proper focus management</li>
              <li>Smooth animations</li>
              <li>Responsive design</li>
            </ul>
          </Modal>
        </div>
      );
    };

export default App;
