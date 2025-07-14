import React, { useState } from 'react'
import styles from './Home.module.css'
import Modal from '../Modal/Modal';
import UserForm from '../Form/UserForm';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={styles.wrapper}>
        <h1>User Details Modal</h1>
        <button onClick={() => setIsOpen(true)} className={styles.btn}>Open Form</button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <UserForm setIsOpen={setIsOpen}/>
      </Modal>
    </div>
  )
}

export default Home
