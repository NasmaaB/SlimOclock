import React, {useState} from 'react'
import Modal from 'react-modal'
import './LoginModal.css'
import Login from "../pages/Login"

Modal.setAppElement('#root');

export default function LoginModal() {
  
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () =>{
        setModalIsOpen(false);
    }

    

    return (
    <div>
        <button onClick={openModal}>Login</button>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="custom-modal" // Ajoutez la classe CSS personnalisée ici
        overlayClassName="custom-overlay"
        contentLabel='Fenetre de connexion'

        >
             <button className="close-button" onClick={closeModal}>
          &times;
        </button>
            <h2>Login</h2>

            {/* ----------------------------------- */}
            <Login/>
            {/* ----------------------------------- */}
        </Modal>
    </div>
  )
}
