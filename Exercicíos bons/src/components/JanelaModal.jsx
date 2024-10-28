import React, { Children } from 'react'
import './Navbar.css'


export default function JanelaModal({isOpen, setModalOpen, Children}) {

   if(isOpen){

    return(
    <div className='modal_conteiner'>
     <div className='conteiner_modal' >

        <button onClick={setModalOpen} className = 'botao_modal'>X</button>
        <p>Olá eu sou o Modal</p>
        <input type="text" />
        <div>
         {Children}
        </div>
        
     </div>
    </div> 
        )
   }

   return null

}
