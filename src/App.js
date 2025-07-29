
import React, {useState } from 'react';
import Modal from "./components/Modal/Modal";
import './components/Modal/Modal.css'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);      
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);                  
  return (
    <div className="app">
      <h1>User Details Modal</h1>          
      <button className="trigger-btn" onClick={openModal}>
        Open Form
      </button>      
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}         
      />
    </div>
  );
};

export default App;
