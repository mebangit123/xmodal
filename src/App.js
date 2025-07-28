// import UserForm from "./components/Form/UserForm";
import Home from "./components/Home/Home";
import ModalWrapper from "./components/Modal/Modal";
import UserForm from "./components/Form/UserForm";
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Modal from 'react-modal';
import SampleModal from "./components/SampleModal";

// Set the app element for accessibility
Modal.setAppElement('#root');

const App = () => {


  return (
    <SampleModal />
  );
};

export default App;
