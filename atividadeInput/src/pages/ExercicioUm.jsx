import React from 'react'
import { useState } from 'react'

function ExercicioUm() {
   
    const [resultado, setResultado] = setResultado()
    
    function gerarNumero(){
        
        
      
    }
   
    function descobrirNumero(){
        
        
    }
    
  return (
    <div className='numeroSecreto-conteiner'>
      <p>Número secreto!🔐</p>
      <p>Descubra o número secreto</p>
      <div>
      <input type="text" />
      </div>
      {}
      <button onClick={gerarNumero}>Gerar número</button>
      <button onClick={descobrirNumero}>descobrir Número</button>
    </div>
  )
}

export default ExercicioUm
