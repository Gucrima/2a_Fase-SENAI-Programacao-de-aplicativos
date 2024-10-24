import JanelaModal from "../components/JanelaModal"
import Navbar from "../components/Navbar"
import { useState } from 'react'

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
      <JanelaModal isOpen = {openModal}/>
    </div>
  )
}

export default Contato
