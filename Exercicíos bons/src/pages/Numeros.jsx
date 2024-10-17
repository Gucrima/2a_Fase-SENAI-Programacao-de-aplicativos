import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from "react";
import './Numaros.css'

function Numeros() {

    const[inputNumero, setInputNumero] = useState('')
    const[contagem, setContagem] = useState([])
    const[resultado, setResultado] = useState(false)
    function lerNumero(){
        if(inputNumero > 100 && inputNumero < 200){
            setContagem(contagem + `${inputNumero}, `)
        }
    }

  return (
      <div>
     <Navbar/>
     
     <div className="conteiner">

     <h1>Exercicíos 7.12</h1> 
     <input type="number" 
     value={inputNumero} 
     onChange={(event) => setInputNumero(event.target.value)} 
     />
     <div>
     <button onClick={lerNumero}>Ler</button>
     </div>
     
     <div>   
     <button onClick={() => setResultado(true)}>RESULTADO</button>
     </div>
      {resultado && <p>resultado de 100 a 200: {contagem} </p>}
     </div>

    </div>
  )
}

export default Numeros
