import React from 'react'


const  BACKGRONDCOLOR_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '1000',
    backgroundcolor: 'rgba(0,0,0, 0.4)'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    trasform: 'translate(-50%, -50%)',
}

export default function JanelaModal({isOpen}) {

   if(isOpen){

    return(
    <div style={BACKGRONDCOLOR_STYLE}>
     <div style={MODAL_STYLE}>Olá eu sou o modal!</div>
    </div> 
        )
   }

   return null

}
