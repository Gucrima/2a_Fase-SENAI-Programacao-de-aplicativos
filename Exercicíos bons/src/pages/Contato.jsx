import JanelaModal from "../components/JanelaModal"
import { useState } from 'react'
import Navbar from "../components/Navbar"

function Contato() {


  const[openModal, setOpenModal] = useState(false)


  return (
    <div>
        <Navbar />
      <h1>Contato</h1>
      <p> Comando para abrir o modal</p>

      <div className="botao-modal">
      <button onClick={ () => setOpenModal(true)}>Abrir Modal</button>
      </div>

      <JanelaModal isOpen = {openModal} setModalOpen = {() => setOpenModal(!openModal)}>
       Olá eu sou o modal!!!
      </JanelaModal>

    </div>
  )
}

export default Contato
