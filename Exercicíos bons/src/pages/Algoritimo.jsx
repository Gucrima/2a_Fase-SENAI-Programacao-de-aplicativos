import React from 'react'
import Navbar from '../components/Navbar'
import './Algoritimo.css'

function Algoritimo() {
    
    // const[maiorN, setMaiorN] = setState(0)
    
    
    function lerMaiorNumero(){
    let numeroDigitado
            do{
            numeroDigitado = prompt('Digite um número GRANDE: ')

            if(numeroDigitado > maiorN){
                    setMaiorN(numeroDigitado)
                }

            }while(numeroD == -1)
      
             alert(`O maior número é ${maiorN}`)


}
  return (
    <div>
      <Navbar/>
      <div className="conteiner">
       <h1>7.15</h1>
       
        <button onClick={lerMaiorNumero}>Fazer Leitura do maior número</button>
        <h2>Digite -1 Quando Quiser terminar</h2>
        
         <p></p>

      </div>
    </div>
  )
}

export default Algoritimo
