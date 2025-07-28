// import UserForm from "./components/Form/UserForm";
import Home from "./components/Home/Home";
import ModalWrapper from "./components/Modal/Modal";
import UserForm from "./components/Form/UserForm";
import ReactModal from 'react-modal';
import { useState } from "react";
// ReactModal.setAppElement('#root');

function App() {

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Home />
      {/* <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
        <UserForm setIsOpen={setIsOpen}/>
      </ModalWrapper> */}
    </>    
  );
}

export default App;
