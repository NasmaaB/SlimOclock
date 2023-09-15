import React, {useState} from 'react'
import Modal from 'react-modal'
import './LoginModal.css'
import Register from "../pages/Register"

Modal.setAppElement('#root');

export default function RegisterModal() {
  
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () =>{
        setModalIsOpen(false);
    }

    

    return (
    <div>
        <button onClick={openModal}>Register</button>
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
            <h2>Inscription</h2>

            {/* ----------------------------------- */}
            <Register/>
            {/* ----------------------------------- */}
        </Modal>
    </div>
  )
}
