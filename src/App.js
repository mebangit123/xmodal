
import React, { useEffect, useState } from 'react';
import Modal from "./components/Test/Modal";
import './components/Test/Modal.css'

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
            Open Form
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
