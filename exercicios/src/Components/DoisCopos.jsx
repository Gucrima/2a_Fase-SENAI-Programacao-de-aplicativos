import { useState } from "react"
import './media.css'


function DoisCopos() {

  const  [resultado, setResultado] = useState()

    function leitura(){
      let resDiv
      let numeroLido = Number(prompt("escreva um número para ser lido: "))

      resDiv = Number(numeroLido / 2)
      
      
      if(numeroLido % 2 == 0 && numeroLido > 0){

        setResultado('Esse número é positivo e Par')
 
       }else if(numeroLido % 2 == 1 && numeroLido > 0){
 
         setResultado('não é par e é positivo')
 
       }

    }

  return (
    <div className="Copos-conteiner">
      <h2>ler dois copos</h2>
      <button onClick={leitura}>aperte pra ler</button>
      {resultado}
    </div>
  )
}

export default DoisCopos
