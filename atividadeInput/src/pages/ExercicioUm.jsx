import React from 'react'
import { useState } from 'react'

function ExercicioUm() {
   
    const [numeroR, setNumeroR] = useState()
    const [numeroIn, setNumeroIn] = useState()
    
    function gerarNumero(){
        
        
      
    }
   
    function descobrirNumero(){
        
        
    }
    
  return (
    <div className='numeroSecreto-conteiner'>
      <p>Número secreto!🔐</p>
      <p>Descubra o número secreto</p>
      <input type="text" />
      {}
      <button onClick={gerarNumero}>Gerar número</button>
      <button onClick={descobrirNumero}>descobrir Número</button>
    </div>
  )
}

export default ExercicioUm
