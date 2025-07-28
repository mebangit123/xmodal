// import UserForm from "./components/Form/UserForm";
import Home from "./components/Home/Home";
import ModalWrapper from "./components/Modal/Modal";
import UserForm from "./components/Form/UserForm";
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>React Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Modal Title</h2>
        <div>
          <p>This is a simple modal example.</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
