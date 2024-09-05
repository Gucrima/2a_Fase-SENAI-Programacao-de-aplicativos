import { useState } from "react"
import './media.css'


function Copo() {

    const  [resultado, setResultado] = useState()

    function leitura(){
      let numeroLido = Number(prompt("escreva um número para ser lido: "))
    
      if(numeroLido > 0){

       setResultado('Esse número é positivo')

      }else if(numeroLido < 0){

        setResultado('Esse número é Negativo')

      }else{

        setResultado('Esse número é Nulo')

      }

    }
  return (
    <div className="Copo-conteiner">
    <h2>Ler copo</h2>
    <button onClick={leitura}>Aperte para ler</button>
    {resultado}
    </div>
  )
}

export default Copo
